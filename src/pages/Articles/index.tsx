// interface IFilters {
//   Page?: number
//   Size?: number
// }

import FetchData from 'components/fetch-data'
import Loading from 'components/loading'
import ArticlesList from 'pages/Articles/ArticlesList'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import API from 'services/Api'
import { GetArticlesResponse } from 'services/ApiGlobals'

export type IFilters = { Size: number; Page: number }

const Articles = () => {
  const [filters, setFilters] = useState<IFilters>({ Size: 10, Page: 1 })
  const [totalData, setTotalData] = useState<GetArticlesResponse[]>([])

  const fetchArticles = () => {
    return API.articles
      .articlesList(filters)
      .then((res) => {
        setTotalData((prev) => prev.concat(res?.data || []))
        return res.data
      })
      .catch((er) => {
        console.log(er)
      })
  }

  console.log(document.documentElement.scrollHeight)
  return (
    <FetchData
      request={fetchArticles}
      deps={[filters]}
      handleEmptyData={false}
      handleLoading={false}
      handleError={false}
    >
      {(data) => {
        return (
          <div className={'h-full '}>
            <InfiniteScroll
              next={() => setFilters({ ...filters, Page: filters?.Page + 1 })}
              hasMore={!(data && data?.length < filters.Size)}
              // hasMore={true}
              height={'1200px'}
              className={'h-full soft-scrollbar'}
              endMessage={'no mre data'}
              loader={<Loading />}
              dataLength={totalData?.length}
            >
              <ArticlesList data={totalData || []} />
            </InfiniteScroll>
            {/*<Pagination*/}
            {/*  onChange={(page) => setFilters({ ...filters, Page: page })}*/}
            {/*  pageSize={filters.Size}*/}
            {/*  total={data?.length || 1}*/}
            {/*  current={filters?.Page}*/}
            {/*/>*/}
          </div>
        )
      }}
    </FetchData>

    // <ManualInfiniteScrollComponent />
  )
}

export default Articles
