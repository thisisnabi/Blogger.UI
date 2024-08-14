import { CalendarIcon, UserIcon } from '@heroicons/react/outline'
import { ReplyIcon } from '@heroicons/react/solid'
import FetchData from 'components/fetch-data'
import Spinner from 'components/loading/Spinner'
import { parseDate } from 'helpers/helpers'
import { useParams } from 'react-router-dom'
import API from 'services/Api'
import { GetCommentsResponse } from 'services/ApiGlobals'

type Props = {
  deps?: string
  onReplay: (comment: GetCommentsResponse) => void
}

const CommentList = (props: Props) => {
  const { deps, onReplay } = props

  const { id } = useParams()

  const fetchComments = () => {
    if (id) return API.comments.articleIdList(id).then((res) => res?.data)

    return Promise.resolve(null)
  }

  return (
    <FetchData
      handleLoading={false}
      request={fetchComments}
      deps={[JSON.stringify({ id: id, deps: deps })]}
    >
      {(data, { loading }) => {
        return (
          <div className={'space-y-4'}>
            <div className={'flex items-center gap-x-3'}>
              <h1>Comments</h1>
              {loading && <Spinner />}
            </div>
            <div className={'space-y-3'}>
              {data?.map((comment, index) => {
                return (
                  <>
                    <div
                      key={`comment-${index}`}
                      className={'bg-white rounded-3 p-4 space-y-2'}
                    >
                      {/*-------------- comment info----------*/}
                      <div
                        className={
                          'text-caption-gray gap-x-4 flex items-center'
                        }
                      >
                        <div
                          className={'gap-x-2 text-[13px] flex items-center'}
                        >
                          <UserIcon className={'w-4'} />
                          <p>{comment?.fullName}</p>
                        </div>
                        <div
                          className={'gap-x-2 text-[13px] flex items-center'}
                        >
                          <CalendarIcon className={'w-4'} />
                          {parseDate(comment?.createdOnUtc || '')}
                        </div>
                      </div>
                      {/*------------*/}
                      <div>
                        <p
                          className={
                            'text-[13px] text-gray2 leading-5 break-all'
                          }
                        >
                          {comment?.content}
                        </p>
                        <div
                          className={
                            'text-gray1 flex items-center text-[13px] px-3 py-1 cursor-pointer justify-end'
                          }
                          onClick={() => {
                            onReplay(comment)
                          }}
                        >
                          {' '}
                          <ReplyIcon className={'w-4 mx-2'} />
                          replay
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        )
      }}
    </FetchData>
  )
}

export default CommentList
