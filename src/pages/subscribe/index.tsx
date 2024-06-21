import { PaperAirplaneIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import Spinner from 'components/loading/Spinner'
import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify'

import API from '../../services/Api'

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const Subscribe = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [hasError, setHasError] = useState<boolean>(false)
  const [isDisabled, setIsDisabled] = useState<boolean>(true)

  const handleSubmit = async () => {
    if (inputRef.current) {
      const inputValue = inputRef.current.value

      if (!isValidEmail(inputValue)) {
        setHasError(true)
        return
      } else setHasError(false)
      setIsLoading(true)

      await API.subscribe
        .subscribeCreate({ email: inputValue })
        .then(() => {
          if (inputRef.current) inputRef.current.value = ''
          setIsDisabled(true)
          toast.success("We've sent a verification email to your inbox.")
        })
        .catch((er) => {
          toast.error(er?.response?.data?.detail)
          console.log(er?.response?.data?.detail)
        })
        .finally(() => setIsLoading(false))
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <div
      className={
        'bg-white rounded-4 w-full py-[40px] align-middle px-6 xl:px-[40px] space-y-3'
      }
    >
      <h2>Subscribe</h2>
      <div
        className={classNames(
          'flex flex-wrap items-center justify-between w-full gap-3',
          isLoading ? 'pointer-events-none' : null
        )}
      >
        <input
          type={'email'}
          ref={inputRef}
          autoFocus
          onKeyPress={handleKeyPress}
          className={
            'min-w-[310px] flex-1 h-[48px] rounded-2 bg-gray4 px-4 focus:outline-0 flex-grow-2'
          }
          placeholder={'example@example.com'}
          onChange={(event) => {
            // @ts-ignore
            setIsDisabled(!isValidEmail(event?.target?.value))
          }}
        />
        <button
          className={classNames(
            'flex flex-1 shrink-0 items-center justify-center align-middle bg-primary whitespace-nowrap text-white rounded-2 h-[48px] gap-x-2 flex-grow-1',
            isDisabled ? 'bg-gray1 cursor-not-allowed' : null
          )}
          disabled={isDisabled}
          onClick={handleSubmit}
        >
          {isLoading ? (
            <>
              <Spinner />
              sending...
            </>
          ) : (
            <>
              <PaperAirplaneIcon className={'w-5 rotate-[50deg] mb-1'} />
              <span>Send Me</span>
            </>
          )}
        </button>
      </div>
      {hasError ? (
        <div className={'text-red-600 px-2 text-sm'}>
          Please enter a valid email address
        </div>
      ) : null}
      <span className={'text-caption-gray text-[12px] px-2'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </span>
    </div>
  )
}

export default Subscribe
