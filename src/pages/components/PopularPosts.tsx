import { TerminalIcon } from '@heroicons/react/outline'
import FetchData from 'components/fetch-data'
import Spinner from 'components/loading/Spinner'
import { Link } from 'react-router-dom'
import API from 'services/Api'

const PopularPosts = () => {
  const getPosts = () => {
    return API.articles.popularsList().then((res) => res?.data)
  }

  return (
    <div className={'bg-white rounded-3 py-5 px-4 space-y-1 shadow-md'}>
      <FetchData request={getPosts} deps={[]} handleLoading={false}>
        {(data, { loading }) => {
          return (
            <>
              <div
                className={
                  'text-4 font-meidum text-gray-3 leading-9 flex items-center gap-x-3'
                }
              >
                <TerminalIcon className={'w-6 text-primary'} />
                <p>Popular Posts</p>
                {loading && <Spinner />}
              </div>
              <ul className={'space-y-3 list-disc pl-5 min-h-[100px]'}>
                {data?.map((node) => (
                  <li
                    key={`popular-post-${node.articleId}`}
                    className={'text-[13px] text-gray1'}
                  >
                    <Link to={`/articles/${node.articleId}`}>{node.title}</Link>
                  </li>
                ))}
              </ul>
            </>
          )
        }}
      </FetchData>
    </div>
  )
}

export default PopularPosts
