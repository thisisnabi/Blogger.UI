import { TagIcon } from '@heroicons/react/outline'
import FetchData from 'components/fetch-data'
import Spinner from 'components/loading/Spinner'
import TagsList from 'pages/tags/TagsList'
import { useNavigate } from 'react-router-dom'
import API from 'services/Api'

const PopularTag = () => {
  const navigate = useNavigate()

  const fetchTags = () => {
    return API.articles.tagsPopularsList().then((res) => {
      return res?.data
    })
  }

  return (
    <div className={'space-y-3 pb-6'}>
      <FetchData request={fetchTags} deps={[]} handleLoading={false}>
        {(data, { loading }) => (
          <>
            <div className={'flex items-center gap-x-3'}>
              <TagIcon className={'w-6 text-primary'} />
              <p className={'text-[18px] font-medium'}>Popular Tags</p>
              {loading && <Spinner />}
            </div>
            <div className={'min-h-[100px] pl-2'}>
              <TagsList
                tags={data || []}
                key={'popular-tag'}
                onSelect={(value) => {
                  navigate({ pathname: '/tags', search: `category=${value}` })
                }}
              />
            </div>
          </>
        )}
      </FetchData>
    </div>
  )
}

export default PopularTag
