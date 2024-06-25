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

  return (
    <div className={'w-[264px] overflow-hidden space-y-4 '}>
      {matchPath('/articles/:id', location.pathname) ? (
        <Headline headers={context?.headers} />
      ) : null}
      <PopularTag />
      <Links />
      <Rights />
    </div>
  )
}

export default RightSidebar
