import { SearchIcon } from '@heroicons/react/outline'
import cx from 'classnames'
import React, { HTMLProps } from 'react'

type SearchInputProps = {
  containerClassName?: string
  icon?: React.ReactNode
  svgProps?: React.ComponentProps<'svg'>
} & HTMLProps<HTMLInputElement> &
  React.HTMLAttributes<HTMLInputElement>

const BaseInput = (props: SearchInputProps) => {
  const { containerClassName, className, svgProps, icon, ...rest } = props
  return (
    <div
      className={cx(
        'flex items-center bg-white rounded-4 h-[56px] px-5 gap-x-3 transition transition-all duration-1000',
        containerClassName
      )}
    >
      {icon ?? (
        <span>
          <SearchIcon className={'w-6 text-gray1'} {...svgProps} />
        </span>
      )}
      <input
        autoComplete="off"
        className={cx(
          'w-full h-full focus:outline-none placeholder:text-[16px] ',
          className
        )}
        placeholder={'search ...'}
        type={'text'}
        {...rest}
      />
    </div>
  )
}

export default BaseInput
