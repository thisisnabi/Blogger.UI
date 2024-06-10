import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import cx from 'classnames'
import React, { HTMLProps } from 'react'

type SearchInputProps = HTMLProps<HTMLDivElement> &
  React.HTMLAttributes<HTMLDivElement>

const SearchInput = (props: SearchInputProps) => {
  const { className, ...rest } = props
  return (
    <div
      className={cx(
        'flex items-center bg-white rounded-4 h-[56px] px-5 gap-x-3',
        className
      )}
      {...rest}
    >
      <span>
        <MagnifyingGlassIcon className={'w-6 text-gray1'} />
      </span>
      <input
        autoComplete="off"
        tabIndex={-1}
        className={'w-full h-full focus:outline-none placeholder:text-[16px]'}
        placeholder={'search ...'}
      />
    </div>
  )
}

export default SearchInput
