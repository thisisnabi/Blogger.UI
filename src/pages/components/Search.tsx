import { SearchIcon } from '@heroicons/react/outline'
import cx from 'classnames'
import React, { HTMLProps } from 'react'

type SearchInputProps = {
  containerClassName?: string
} & HTMLProps<HTMLInputElement> &
  React.HTMLAttributes<HTMLInputElement>

const SearchInput = (props: SearchInputProps) => {
  const { containerClassName, ...rest } = props
  return (
    <div
      className={cx(
        'flex items-center bg-white rounded-4 h-[56px] px-5 gap-x-3',
        containerClassName
      )}
      {...rest}
    >
      <span>
        <SearchIcon className={'w-6 text-gray1'} />
      </span>
      <input
        autoComplete="off"
        className={'w-full h-full focus:outline-none placeholder:text-[16px]'}
        placeholder={'search ...'}
        type={'text'}
        {...rest}
      />
    </div>
  )
}

export default SearchInput
