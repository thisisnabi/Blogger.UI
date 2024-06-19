import { PaperAirplaneIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import React, { useRef, useState } from 'react'

import Loading from '../../components/loading'
import API from '../../services/Api'

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const Subscribe = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [hasError, setHasError] = useState<boolean>(false)

  const handleSubmit = async () => {
    if (inputRef.current) {
      setIsLoading(true)
      const inputValue = inputRef.current.value

      if (!isValidEmail(inputValue)) {
        setHasError(true)
        return
      } else setHasError(false)

      await API.subscribe
        .subscribeCreate({ email: inputValue })
        .then(() => {
          if (inputRef.current) inputRef.current.value = ''
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
          'flex flex-wrap items-center justify-between w-full gap-x-3',
          isLoading ? 'pointer-events-none' : null
        )}
      >
        <input
          type={'email'}
          ref={inputRef}
          onKeyPress={handleKeyPress}
          className={
            'min-w-[310px] flex-1 h-[48px] rounded-2 bg-gray4 px-4 focus:outline-0 flex-grow-2'
          }
          placeholder={'example@example.com'}
        />
        <button
          className={classNames(
            'flex flex-1 items-center justify-center align-middle bg-primary whitespace-nowrap text-white rounded-2 h-[48px] gap-x-2 flex-grow-1'
          )}
        >
          {isLoading ? (
            <Loading className={'w-[50px] m-auto'} />
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
