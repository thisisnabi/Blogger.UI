import { TagIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import FetchData from 'components/fetch-data'
import ArticlesList from 'pages/articles/ArticlesList'
import TagsList from 'pages/tags/TagsList'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import API from 'services/Api'

const Tags = () => {
  const [animate, setAnimate] = useState<'up' | 'down' | null>(null)
  const [searchParams] = useSearchParams()
  const selectedCategory = searchParams.get('category')

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
    if (selectedCategory)
      req = API.articles.taggedList({ Tag: selectedCategory })
    else req = API.articles.articlesList()

    return req
      .then((res) => {
        setAnimate('up')
        return res.data
      })
      .catch((er) => {
        console.log(er)
      })
  }

  return (
    <div className={'space-y-3'}>
      <div className={'flex items-center border-b-1 py-3'}>
        <TagIcon className={'w-6 mr-3 text-primary'} />
        <h1 className={'font-semibold text-primary'}>All Tags</h1>
      </div>
      <FetchData request={fetchTags} deps={[]}>
        {(data) => (
          <TagsList
            tags={data || []}
            selected={selectedCategory}
            key={'tags'}
            onSelect={() => {
              setAnimate('down')
            }}
          />
        )}
      </FetchData>

      <FetchData request={fetchArticles} deps={[selectedCategory]}>
        {(data, { loading }) => (
          <div className={'!h-[800px]'}>
            <div
              className={classNames(
                '!h-full animate__animated ',
                animate == 'up' ? 'animate__fadeInUp soft-scrollbar' : null,
                animate == 'down' ? 'animate__fadeOutDown ' : null
              )}
            >
              <ArticlesList data={data || []} isLoading={loading || false} />
            </div>
          </div>
        )}
      </FetchData>
    </div>
  )
}

export default Tags
