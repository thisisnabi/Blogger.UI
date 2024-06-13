import { CalendarIcon, ClockIcon, TagIcon } from '@heroicons/react/outline'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import FetchData from 'components/fetch-data'
import { parseDate } from 'helpers/helpers'
import Pagination from 'rc-pagination'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import API from 'services/Api'

interface IFilters {
  Page?: number
  Size?: number
}

const Home = () => {
  const [filters, setFilters] = useState<IFilters>({ Size: 20, Page: 1 })

  const fetchArticles = () => {
    return API.articles.articlesList(filters).then((res) => res.data)
  }

  return (
    <FetchData request={fetchArticles} deps={[]}>
      {(data) => {
        return (
          <div>
            <div>
              {data?.map((article) => (
                <div
                  key={`article-${article?.articleId}`}
                  className={'space-y-2 border-b-1 last:border-b-0 py-2'}
                >
                  <Link
                    to={`/articles/${article?.articleId}`}
                    className={
                      'text-4 font-bold lg:text-[24px] lg:font-semibold transition-all'
                    }
                  >
                    {article?.title}
                  </Link>
                  <p className={'text-gray1 text-[13px] font-normal'}>
                    {article?.summary}
                  </p>
                  <div className={'flex items-center gap-x-5 text-gray1'}>
                    <div className={'text-3 flex items-center'}>
                      <CalendarIcon className={'mr-2 w-4'} />
                      {parseDate(article?.publishedOnUtc || '')}
                    </div>
                    <div className={'text-3 flex items-center'}>
                      <ClockIcon className={'mr-2 w-4'} />
                      {article.readOnMinutes}
                      min Read
                    </div>
                    <div className={'text-3 flex items-center'}>
                      <TagIcon className={'mr-2 w-4'} />
                      {article?.tags?.map((tag) => tag + '  ')}
                    </div>
                  </div>
                </div>
              ))}
              <Pagination
                align={'center'}
                className={'flex items-center border-0 !py-10'}
                selectPrefixCls={'!bg-red-300'}
                style={{ borderRadius: '10px', border: 'none' }}
                current={filters?.Page}
                total={400 || data?.length || 1}
                pageSize={filters.Size}
                onChange={(page) => setFilters({ ...filters, Page: page })}
                prevIcon={() => (
                  <div>
                    <ChevronLeftIcon className={'w-6'} />
                  </div>
                )}
                nextIcon={() => (
                  <div>
                    <ChevronRightIcon className={'w-6'} />
                  </div>
                )}
              />
            </div>
          </div>
        )
      }}
    </FetchData>
  )
}

export default Home
