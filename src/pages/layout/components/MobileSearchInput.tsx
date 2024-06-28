import cx from 'classnames'
import SearchInput from 'pages/components/BaseInput'
import { useState } from 'react'

const MobileSearchInput = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <SearchInput
      onBlur={() => {
        console.log('bluer')
        setIsOpen(false)
      }}
      className={cx(
        'transition transition-all duration-700 w-0',
        // !isOpen ? 'w-0' : null,
        isOpen ? 'absolute !w-full right-0' : null
      )}
      containerClassName={
        cx()
        // 'w-fit'
        // 'w-fit absolute transition transition-all duration-1000 ease-in-out',
        // isOpen ? ' w-full transition transition-all duration-1000' : null
      }
      svgProps={{ onClick: () => setIsOpen(true) }}
    />
  )
}

export default MobileSearchInput
