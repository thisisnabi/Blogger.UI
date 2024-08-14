import {
  DocumentDuplicateIcon,
  ExternalLinkIcon,
} from '@heroicons/react/outline'
import { FullWindowCode } from 'pages/articles/detail/components/fullWindowCode'
import HeadTag from 'pages/articles/detail/components/HeadTag'
import React, { ElementType, ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { toast } from 'react-toastify'

interface MarkdownRendererProps {
  content: string
}

interface CodeProps {
  inline?: boolean
  className?: string
  children: ReactNode[]
}

const MdReader = ({ content }: MarkdownRendererProps) => {
  const renderCode: ElementType = ({
    inline,
    className,
    children,
    ...props
  }: CodeProps) => {
    const match = /language-(\w+)/.exec(className || '')
    const language = match ? match[1] : ''

    const codeString = Array.isArray(children) ? children.join('') : children

    const handleCopy = () => {
      navigator.clipboard.writeText(codeString)
      toast.success('copied ', {
        bodyClassName: '!w-fit',
        className: '!w-fit !px-6',
        autoClose: 1000,
        closeButton: <></>,
      })
    }

    const handleOpenInNewWindow = () => {
      return FullWindowCode(language, codeString)
    }

    return !inline && match ? (
      <div style={{ position: 'relative' }}>
        <div
          className={
            'text-white rounded-2 px-7 py-2 gap-x-3 flex items-center justify-end absolute right-0 top-1'
          }
        >
          <DocumentDuplicateIcon
            onClick={handleCopy}
            className={'w-5 cursor-pointer'}
          />
          <ExternalLinkIcon
            onClick={handleOpenInNewWindow}
            className={'w-5 cursor-pointer'}
          />
        </div>
        <SyntaxHighlighter
          language={language}
          style={coldarkDark}
          showLineNumbers
          customStyle={{
            borderRadius: '8px',
            paddingTop: '40px',
          }}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  }

  return (
    <ReactMarkdown
      components={{
        code: renderCode,
        h1: ({ children }) => <HeadTag level={1}>{children}</HeadTag>,
        h2: ({ children }) => <HeadTag level={2}>{children}</HeadTag>,
        h3: ({ children }) => <HeadTag level={3}>{children}</HeadTag>,
        h4: ({ children }) => <HeadTag level={4}>{children}</HeadTag>,
        h5: ({ children }) => <HeadTag level={5}>{children}</HeadTag>,
      }}
    >
      {content}
    </ReactMarkdown>
  )
}

export default MdReader
