import { debounce } from 'lodash'
import { IFilters } from 'pages/Articles'
import ArticlesList from 'pages/Articles/ArticlesList'
import React, { useEffect, useRef, useState } from 'react'
import API from 'services/Api'
import { GetArticlesResponse } from 'services/ApiGlobals'

const ScrollableSidebar = () => {
  const [hasMore] = useState(true)
  const [totalData, setTotalData] = useState<GetArticlesResponse[]>([])
  const [filters, setFilters] = useState<IFilters>({ Size: 10, Page: 1 })

  const listInnerRef = useRef<HTMLDivElement>(null)

  const fetchArticles = async (filters: IFilters) => {
    try {
      const res = await API.articles.articlesList(filters)

      // if (res?.data?.length < filters.Size) {
      //   setHasMore(false)
      // }

      setTotalData((prevData) => [...prevData, ...(res?.data || [])])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchArticles(filters)
  }, [filters])

  const loadMoreItems = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      Page: prevFilters.Page + 1,
    }))
  }

  const handleScroll = debounce(() => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current

      if (scrollTop + clientHeight >= scrollHeight - 5 && hasMore) {
        loadMoreItems()
      }
    }
  }, 100) // Adjust debounce delay as necessary

  useEffect(() => {
    const listRef = listInnerRef.current

    if (listRef) {
      listRef.addEventListener('scroll', handleScroll)
      return () => listRef.removeEventListener('scroll', handleScroll)
    }
  }, [hasMore, totalData])

  return (
    <div
      ref={listInnerRef}
      className="scrollable-list h-full overflow-y-auto bg-red-300 soft-scrollbar"
    >
      <ArticlesList data={totalData} />
      {hasMore && <h4 style={{ textAlign: 'center' }}>Loading...</h4>}
      {!hasMore && <p style={{ textAlign: 'center' }}>No more data to load</p>}
    </div>
  )
}

export default ScrollableSidebar
