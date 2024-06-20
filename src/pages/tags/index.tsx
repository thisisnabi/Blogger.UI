import { TagIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import FetchData from 'components/fetch-data'
import ArticlesList from 'pages/Articles/ArticlesList'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import API from 'services/Api'

import SvgNote from '../../assets/icons/Note'

const Tags = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  // const [loading, setLoading] = useState<boolean>(false)
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
    // setLoading(true)
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
        // setLoading(false)
      })
  }

  console.log(category)
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
                  'bg-white flex items-center shadow-md rounded-4 py-2 px-3 text-[13px] space-x-3 whitespace-nowrap cursor-pointer',
                  'transform transition-transform duration-200 ease-in-out hover:scale-110 focus:scale-110 active:scale-105',
                  // loading ? 'pointer-events-none' : 'pointer-events-auto',
                  category == tag?.name ? '!bg-primary text-white' : null
                )}
                onClick={() => {
                  if (tag?.name) setSearchParams({ category: tag?.name })
                  setAnimate('down')
                }}
              >
                <div>{tag?.name}</div>
                <div
                  className={'scale-125 text-caption-gray flex items-center'}
                >
                  <SvgNote className={'text-caption-gray'} />

                  {tag?.count}
                </div>
              </div>
            ))
          }
        </FetchData>
      </div>
      <FetchData request={fetchArticles} deps={[category]}>
        {(data) => (
          <div className={'!h-[800px]'}>
            <div
              className={classNames(
                '!h-full animate__animated ',
                animate == 'up' ? 'animate__fadeInUp soft-scrollbar' : null,
                animate == 'down' ? 'animate__fadeOutDown ' : null
              )}
            >
              <ArticlesList data={data || []} />
            </div>
          </div>
        )}
      </FetchData>
    </div>
  )
}

export default Tags
