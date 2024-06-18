import SearchInput from 'pages/components/Search'
import LeftSidebar from 'pages/layout/components/LeftSidebar'
import RightSidebar from 'pages/layout/components/RightSidebar'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={'py-8 w-full'}>
      <div
        className={
          '!h-full mx-auto w-full max-w-[1181px] flex item-start gap-x-6 soft-scrollbar'
        }
      >
        <LeftSidebar />

        {/*inner */}
        <div className={'w-[552px] space-y-2 h-[1200px] space-y-5'}>
          <SearchInput />
          <div className={'h-full'}>{children}</div>
        </div>

        <RightSidebar />
      </div>
    </div>
  )
}

export default Layout
