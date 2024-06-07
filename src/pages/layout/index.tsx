import LeftSidebar from 'pages/layout/components/LeftSidebar'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={'overflow-x-hidden min-h-screen bg-[#f5f5f7]'}>
      <div className={'mx-auto w-full max-w-[1260px] mt-8 flex item-start'}>
        <LeftSidebar />
        {children}
      </div>
    </div>
  )
}

export default Layout
