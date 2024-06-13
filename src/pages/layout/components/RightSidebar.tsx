import Links from 'pages/layout/components/Links'
import PopularTag from 'pages/layout/components/PopularTag'
import React from 'react'

const RightSidebar = () => {
  return (
    <div className={'w-[264px] overflow-hidden space-y-4'}>
      <PopularTag />
      <Links />
    </div>
  )
}

export default RightSidebar
