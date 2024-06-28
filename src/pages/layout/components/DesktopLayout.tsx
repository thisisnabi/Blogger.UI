import Search from 'pages/layout/components/Search'
import React from 'react'

import { LayoutProps } from '../index'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'

const DesktopLayout = React.memo(function DesktopLayout({
  children,
}: LayoutProps) {
  return (
    <div className={'py-8 w-full relative'}>
      <div
        className={
          '!h-full mx-auto w-full lg:max-w-[1181px] flex item-start justify-center gap-x-6 soft-scrollbar'
        }
      >
        <LeftSidebar />
        <div className={'w-[552px] space-y-2 min-h-[1200px] space-y-5'}>
          <Search />
          <div className={'h-full'}>{children}</div>
        </div>

        <RightSidebar />
      </div>
    </div>
  )
})

export default DesktopLayout
