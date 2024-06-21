// interface IFilters {
//   Page?: number
//   Size?: number
// }

import FetchData from 'components/fetch-data'
import InfiniteScrollComponent from 'components/infinite-scroll-list'
import ArticlesList from 'pages/Articles/ArticlesList'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import API from 'services/Api'
import { GetArticlesResponse } from 'services/ApiGlobals'

export type IFilters = { Size: number; Page: number }

const Articles = () => {
  const [filters, setFilters] = useState<IFilters>({ Size: 10, Page: 1 })
  const [totalData, setTotalData] = useState<GetArticlesResponse[]>([])

  const [searchParams] = useSearchParams()
  const search = searchParams.get('search')

  const fetchArticles = () => {
    return API.articles
      .articlesList({ ...filters, Title: search || undefined })
      .then((res) => {
        if (filters.Page == 1 && !res?.data?.length) {
          setTotalData([])
        } else setTotalData((prev) => prev.concat(res?.data || []))
        return res.data
      })
      .catch((er) => {
        console.log(er)
      })
  }

  return (
    <FetchData
      request={fetchArticles}
      deps={[filters, search]}
      handleLoading={false}
      handleError={false}
      handleEmptyData={false}
    >
      {(data, { loading }) => (
        <InfiniteScrollComponent
          hasMore={!(data && data?.length < filters.Size)}
          onMore={() => {
            setFilters((prev) => ({ ...prev, Page: prev.Page + 1 }))
          }}
        >
          <ArticlesList data={totalData} isLoading={loading || false} />
        </InfiniteScrollComponent>
      )}
    </FetchData>
  )
}

export default Articles
