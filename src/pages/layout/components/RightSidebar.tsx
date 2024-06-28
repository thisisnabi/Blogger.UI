import cx from 'classnames'
import { MyContext } from 'components/context'
import Headline from 'pages/articles/detail/components/Headline'
import Links from 'pages/components/Links'
import PopularTag from 'pages/components/PopularTag'
import Rights from 'pages/components/Rights'
import React, { useContext } from 'react'
import { matchPath, useLocation } from 'react-router-dom'

const RightSidebar = () => {
  const context = useContext(MyContext)
  const location = useLocation()

  const isDetailOfArticle = matchPath('/articles/:id', location.pathname)
  return (
    <div
      className={cx(
        'w-[264px] h-fit overflow-hidden space-y-4',
        isDetailOfArticle ? ' sticky top-4' : null
      )}
    >
      {isDetailOfArticle ? <Headline headers={context?.headers} /> : null}
      <PopularTag />
      <Links />
      <Rights />
    </div>
  )
}

export default RightSidebar
