import { TagIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import FetchData from 'components/fetch-data'
import ArticlesList from 'pages/Articles/ArticlesList'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import API from 'services/Api'

const Tags = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [loading, setLoading] = useState<boolean>(false)
  const [animate, setAnimate] = useState<'up' | 'down' | null>(null)
  const category = searchParams.get('category')

  const fetchTags = () => {
    return API.articles
      .tagsList()
      .then((res) => res?.data)
      .catch((er) => {
        console.log(er)
      })
  }

  const fetchArticles = () => {
    setLoading(true)
    setAnimate('down')
    let req
    if (category) req = API.articles.taggedList({ Tag: category })
    else req = API.articles.articlesList()

    return req
      .then((res) => {
        setAnimate('up')
        return res.data
      })
      .catch((er) => {
        console.log(er)
      })
      .finally(() => {
        setLoading(false)
      })
  }

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
                  setAnimate('down')
                }}
              >
                <span>{tag?.name}</span>
                <span className={'text-caption-gray'}>{tag?.count}</span>
              </div>
            ))
          }
        </FetchData>
      </div>
      <FetchData request={fetchArticles} deps={[category]}>
        {(data) => (
          <div
            className={classNames(
              'animate__animated',
              animate == 'up' ? 'animate__fadeInUp' : null,
              animate == 'down' ? 'animate__fadeOutDown' : null
            )}
          >
            <ArticlesList data={data || []} />
          </div>
        )}
      </FetchData>
    </div>
  )
}

export default Tags
