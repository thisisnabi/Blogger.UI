import { TerminalIcon } from '@heroicons/react/outline'
import FetchData from 'components/fetch-data'
import { Link } from 'react-router-dom'
import API from 'services/Api'

const PopularPosts = () => {
  const getPosts = () => {
    return API.articles.popularsList().then((res) => res?.data)
  }

  return (
    <div className={'bg-white rounded-3 p-6 space-y-1'}>
      <div
        className={
          'text-4 font-meidum text-gray-3 leading-9 flex items-center gap-x-3'
        }
      >
        <TerminalIcon className={'w-6 text-primary'} />
        <p>Popular Posts</p>
      </div>
      <FetchData request={getPosts} deps={[]}>
        {(data) => {
          return (
            <ul className={'space-y-3 list-disc pl-5'}>
              {data?.map((node) => (
                <li
                  key={`popular-post-${node.articleId}`}
                  className={'text-[13px] text-gray1'}
                >
                  <Link to={`/articles/${node.articleId}`}>{node.title}</Link>
                </li>
              ))}
            </ul>
          )
        }}
      </FetchData>
    </div>
  )
}

export default PopularPosts
