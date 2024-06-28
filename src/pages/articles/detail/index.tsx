import 'highlight.js/styles/darcula.css'

import { CalendarIcon, HeartIcon, TagIcon } from '@heroicons/react/outline'
import cx from 'classnames'
import { IHeader, MyContext } from 'components/context'
import FetchData from 'components/fetch-data'
import { parseDate } from 'helpers/helpers'
import Comments from 'pages/articles/detail/components/comments'
import MdReader from 'pages/articles/detail/components/MdReader'
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from 'services/Api'

const value = `
# Hello World

Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
# Hello World2
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
Here is some JavaScript code:
# Hello World3

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
console.log(greet("world"));
\`\`\`

And here is the same function in Python:

\`\`\`python
def greet(name):
  return f"Hello, {name}!"
print(greet("world"))
\`\`\`
`

const ArticleDetail = () => {
  const { id } = useParams()
  const { setHeaders } = useContext(MyContext)
  const [isLiked, setIsLiked] = useState<boolean>(false)

  const fetchDetail = () => {
    if (id)
      return API.articles.articleIdList(id).then((res) => {
        extractHeadings(value || res?.data?.body || '')
        return res?.data
      })
    return Promise.resolve(null)
  }

  const extractHeadings = (markdownText: string) => {
    const headingRegex = /^#+\s+(.+)/gm
    const matches = [...markdownText.matchAll(headingRegex)]
    const extractedHeadings: IHeader[] = matches.map((match) => ({
      id: `${match[1]?.toLowerCase().replace(/\s+/g, '-')}`,
      level: match[0].indexOf('#') + 1,
      text: match[1],
    }))
    if (setHeaders) setHeaders(extractedHeadings)
  }

  return (
    <FetchData request={fetchDetail} deps={[id]}>
      {(data) => (
        <div className={'space-y-4 pb-6'}>
          <div className={'text-primary text-[40px] font-semibold'}>
            {data?.title}
          </div>
          {/*-----------summary-------------*/}
          <div className={'text-[14px] text-gray1'}>
            <span className={'font-semibold text-gray2 mr-3'}>summary:</span>
            {data?.summary}
          </div>
          {/*-------------info --------------*/}
          <div
            className={
              'flex items-center text-caption-gray gap-x-5 text-[13px] border-b-1 pb-6 px-2'
            }
          >
            <div className={'flex items-center gap-x-2'}>
              <TagIcon className={'w-5'} />
              Tag: {data?.tags?.map((tag) => tag + '  ')}
            </div>
            <div className={'flex items-center gap-x-2'}>
              <CalendarIcon className={'w-5'} />
              {parseDate(data?.publishedOnUtc || '')}
            </div>
            {/*----------- feedback-------------*/}
            <div
              className={
                'text-primary font-semibold gap-x-2 flex items-center text-[14px] ml-auto cursor-pointer'
              }
              onClick={() => setIsLiked(!isLiked)}
            >
              <HeartIcon
                className={cx(
                  'w-5 text-primary outline-2 fill-transparent mb-1',
                  isLiked ? 'fill-red-700 !text-red-700' : null
                )}
              />
              Feedback
            </div>
          </div>
          <MdReader content={value || data?.body || ''} />
          <Comments />
        </div>
      )}
    </FetchData>
  )
}

export default ArticleDetail
