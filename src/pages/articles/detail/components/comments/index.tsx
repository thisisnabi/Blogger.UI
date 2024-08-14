import CommentForm from 'pages/articles/detail/components/comments/CommentForm'
import CommentList from 'pages/articles/detail/components/comments/CommentList'
import { useState } from 'react'

export type ReplayInfoType = {
  name: string
  id: string
} | null

const Comments = () => {
  const [resetField, setResetField] = useState<string>('')
  const [replayInfo, setReplayInfo] = useState<ReplayInfoType>(null)

  return (
    <div className={'py-8'}>
      <CommentForm
        afterSubmit={() => {
          setResetField(new Date().getTime().toString())
          setReplayInfo(null)
        }}
        replayInfo={replayInfo}
      />
      <CommentList
        deps={resetField}
        onReplay={(comment) =>
          setReplayInfo({
            id: comment?.id || '',
            name: comment?.fullName || '',
          })
        }
      />
    </div>
  )
}

export default Comments
