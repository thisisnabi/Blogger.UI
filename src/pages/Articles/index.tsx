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
              height={'1100px'}
              className={'h-full soft-scrollbar px-2'}
              loader={<Loading />}
              dataLength={totalData?.length}
            >
              <ArticlesList data={totalData || []} />
            </InfiniteScroll>

          </div>
        )
      }}
    </FetchData>

    // <ManualInfiniteScrollComponent />
  )
}

export default Articles
