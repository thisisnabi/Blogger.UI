import { ClipboardCheckIcon } from '@heroicons/react/outline'
import { IHeader } from 'components/context'
import React from 'react'

interface MarkdownRendererProps {
  headers?: IHeader[]
}

const Headline: React.FC<MarkdownRendererProps> = ({ headers }) => {
  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className={' border-b-1 pb-7'}>
      <div className={'flex items-center gap-x-2'}>
        <ClipboardCheckIcon className={'w-6 text-primary'} />
        <h3>Headline of content</h3>
      </div>
      <ul className={'ml-3 py-3 border-l-1'}>
        {headers?.map((heading, index) => (
          <li
            key={`headline-${index}`}
            onClick={() => scrollToHeading(heading.id)}
            className={
              'text-[14px] px-3 text-gray2 leading-7 cursor-pointer hover:text-primary border-l-1 hover:border-primary hover:border-l-2'
            }
          >
            {heading.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Headline
