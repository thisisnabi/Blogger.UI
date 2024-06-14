import SearchInput from 'pages/components/Search'
import LeftSidebar from 'pages/layout/components/LeftSidebar'
import RightSidebar from 'pages/layout/components/RightSidebar'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={'py-8 w-full soft-scrollbar'}>
      <div
        className={
          '!h-full mx-auto w-full max-w-[1260px] flex item-start gap-x-6 soft-scrollbar'
        }
      >
        <LeftSidebar />
        <div className={'w-[552px] space-y-2'}>
          <SearchInput />
          {children}
        </div>
        <RightSidebar />
      </div>
    </div>
  )
}

export default Layout
