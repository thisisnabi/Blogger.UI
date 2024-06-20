import { TagIcon } from '@heroicons/react/outline'
import FetchData from 'components/fetch-data'
import Spinner from 'components/loading/Spinner'
import API from 'services/Api'

const PopularTag = () => {
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
              <p className={'text-[18px] font-medium'}>Popular Tag</p>
              {loading && <Spinner />}
            </div>
            <div className={'flex items-center gap-2 flex-wrap min-h-[100px]'}>
              {data?.map((tag, index) => (
                <div
                  key={`popular-tag-${index}`}
                  className={
                    'w-fit shadow-md whitespace-nowrap bg-white text-gray2 text-[13px] rounded-4 py-2 px-3'
                  }
                >
                  {tag?.name}
                </div>
              ))}
            </div>
          </>
        )}
      </FetchData>
    </div>
  )
}

export default PopularTag
