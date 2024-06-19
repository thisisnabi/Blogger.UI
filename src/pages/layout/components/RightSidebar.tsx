import Links from 'pages/components/Links'
import PopularTag from 'pages/components/PopularTag'
import React from 'react'

const RightSidebar = () => {
  return (
    <div className={'w-[264px] overflow-hidden space-y-4 '}>
      <PopularTag />
      <Links />
    </div>
  )
}

export default RightSidebar
