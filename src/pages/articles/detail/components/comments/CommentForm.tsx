import { PaperAirplaneIcon } from '@heroicons/react/outline'
import cx from 'classnames'
import Spinner from 'components/loading/Spinner'
import { ReplayInfoType } from 'pages/articles/detail/components/comments/index'
import BaseInput from 'pages/components/BaseInput'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import API from 'services/Api'
import { MakeCommetRequest } from 'services/ApiGlobals'

type Props = { afterSubmit?: () => void; replayInfo: ReplayInfoType }

const CommentForm = ({ afterSubmit, replayInfo }: Props) => {
  const { id } = useParams()
  const ref = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLTextAreaElement>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [formData, setFormData] = useState<
    Omit<MakeCommetRequest, 'articleId'>
  >({
    email: '',
    content: '',
    fullName: '',
  })

  useEffect(() => {
    if (replayInfo?.name) {
      setFormData({ ...formData, content: `@${replayInfo?.name} ` })
      ref?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      textRef?.current?.focus()
    }
  }, [replayInfo])

  const addComment = (
    data: Pick<MakeCommetRequest, 'content' | 'email' | 'fullName'>
  ) => {
    setIsLoading(true)

    if (
      replayInfo?.id &&
      replayInfo?.name &&
      formData?.content?.includes(`@${replayInfo?.name}`)
    ) {
      return API.comments
        .commentIdReplyCreate(replayInfo?.id, {
          ...formData,
          content: formData?.content?.split(replayInfo?.name)[1],
        })
        .then(() => {
          toast.success('we receive your replay')
        })
        .catch((er) => {
          toast.error(er?.response.data?.message)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }

    return API.comments
      .commentsCreate({ ...data, articleId: id })
      .then(() => {
        toast.success('thanks for your comment :)')
      })
      .catch((er) => {
        console.log(er)
        toast.error('some thing went wrong :(')
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <div className={'space-y-4'} ref={ref}>
      <h1>Your Comment</h1>
      <form
        onSubmit={(event) => {
          event?.preventDefault()
          const formData = new FormData(event.currentTarget)
          const info = Object.fromEntries(formData)
          addComment(info).then(() => {
            setFormData({ fullName: '', email: '' })
            if (afterSubmit) afterSubmit()
          })
        }}
      >
        <div className={'space-y-4'}>
          <div className={'flex items-center flex-wrap justify-between gap-4'}>
            <BaseInput
              icon={<></>}
              className={'h-[56px] '}
              containerClassName={'basis-[268px] grow'}
              placeholder={'Your name'}
              name={'fullName'}
              value={formData?.fullName || ''}
              onChange={(event) => {
                setFormData({
                  ...formData,
                  // @ts-ignore
                  fullName: event?.target?.value,
                })
              }}
              required
            />
            <BaseInput
              icon={<></>}
              className={'h-[56px] '}
              containerClassName={'basis-[268px] grow'}
              placeholder={'Exampel@Exampel.com'}
              type={'email'}
              name={'email'}
              value={formData?.email || ''}
              onChange={(event) => {
                setFormData({
                  ...formData,
                  // @ts-ignore
                  email: event?.target?.value,
                })
              }}
              required
            />
          </div>
          <textarea
            className={'w-full rounded-2 p-4 focus:outline-0'}
            placeholder={'type here...'}
            ref={textRef}
            rows={4}
            name={'content'}
            value={formData?.content || ''}
            onChange={(event) => {
              // @ts-ignore
              setFormData({ ...formData, content: event?.target?.value })
            }}
            required
          />
        </div>
        <div>
          <button
            type={'submit'}
            className={cx(
              'flex items-center justify-center text-6 font-medium bg-primary ml-auto w-[200px] h-[56px] text-white rounded-2 mt-4',
              isLoading ? '!bg-gray2 pointer-events-none' : null
            )}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Spinner className={'mx-3'} />
                sending .....
              </>
            ) : (
              <>
                <PaperAirplaneIcon className={'w-5 rotate-[50deg] mr-3 mb-2'} />
                Send Comment
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default CommentForm
