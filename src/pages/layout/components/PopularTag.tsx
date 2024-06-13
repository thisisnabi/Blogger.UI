import {TagIcon} from '@heroicons/react/outline'
import FetchData from 'components/fetch-data'
import API from 'services/Api'

const PopularTag = () => {
  const fetchTags = () => {
    return API.articles.tagsPopularsList().then((res) => {
      return res?.data
    })
  }


  return (
    <div>
      <div className={'flex items-center gap-x-3'}>
        <TagIcon className={'w-6 text-primary'}/>
        <p className={'text-[18px] font-medium'}>Popular Tag</p>
      </div>
      <FetchData request={fetchTags} deps={[]}>
        {(data) => (
          <>
            {data?.map((tag, index) => (
              <div key={`popular-tag-${index}`}>{tag?.name}</div>
            ))}
          </>
        )}
      </FetchData>
    </div>
  )
}

export default PopularTag
