import FetchData from 'components/fetch-data'
import Pagination from 'components/pagination'
import ArticlesList from 'pages/Articles/ArticlesList'
import { useState } from 'react'
import API from 'services/Api'

interface IFilters {
  Page?: number
  Size?: number
}

const Articles = () => {
  const [filters, setFilters] = useState<IFilters>({ Size: 10, Page: 1 })

  const fetchArticles = () => {
    return API.articles
      .articlesList(filters)
      .then((res) => res.data)
      .catch((er) => {
        console.log(er)
      })
  }

  return (
    <FetchData request={fetchArticles} deps={[]}>
      {(data) => {
        return (
          <div>
            <ArticlesList data={data || []} />
            <Pagination
              onChange={(page) => setFilters({ ...filters, Page: page })}
              pageSize={filters.Size}
              total={data?.length || 1}
              current={filters?.Page}
            />
          </div>
        )
      }}
    </FetchData>
  )
}

export default Articles
