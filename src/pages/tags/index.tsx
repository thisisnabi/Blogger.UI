import { TagIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import FetchData from 'components/fetch-data'
import { filter } from 'lodash'
import ArticlesList from 'pages/Articles/ArticlesList'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import API from 'services/Api'
import { GetArticlesResponse } from 'services/ApiGlobals'

const Tags = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [loading, setLoading] = useState<boolean>(false)
  const [articles, setArticles] = useState<GetArticlesResponse[]>()
  const [animate, setAnimate] = useState<boolean>()

  const fetchTags = () => {
    return API.articles.tagsList().then((res) => res?.data)
  }

  const fetchArticles = () => {
    setLoading(true)
    return API.articles
      .articlesList()
      .then((res) => {
        setArticles(res?.data || [])

        return res.data
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const filteredArticles = useMemo(() => {
    const category = searchParams.get('category')

    if (category) {
      let copy = [...(articles || [])]

      copy = filter(
        copy,
        (x) => x?.tags && x?.tags?.includes(category)
      ) as typeof copy

      return copy
    }

    return []
  }, [searchParams.get('category')])

  return (
    <div className={'space-y-3'}>
      <div className={'flex items-center border-b-1 py-3'}>
        <TagIcon className={'w-6 mr-3 text-primary'} />
        <h1 className={'font-semibold text-primary'}>All Tags</h1>
      </div>
      <div className={classNames('flex flex-wrap gap-3')}>
        <FetchData request={fetchTags} deps={[]}>
          {(data) =>
            data?.map((tag, index) => (
              <div
                key={`tag-${index}`}
                className={classNames(
                  'bg-white shadow-md rounded-4 py-2 px-3 text-[13px] space-x-3 whitespace-nowrap cursor-pointer',
                  'hover:scale-110',
                  loading ? 'pointer-events-none ' : 'pointer-events-auto'
                )}
                onClick={() => {
                  if (tag?.name) setSearchParams({ category: tag?.name })
                  setAnimate(!animate)
                }}
              >
                <span>{tag?.name}</span>
                <span className={'text-caption-gray'}>{tag?.count}</span>
              </div>
            ))
          }
        </FetchData>
      </div>
      <FetchData request={fetchArticles} deps={[]}>
        {() => (
          <div className={classNames('animate__animated animate__fadeInDown')}>
            <ArticlesList data={filteredArticles || []} />
          </div>
        )}
      </FetchData>
    </div>
  )
}

export default Tags
