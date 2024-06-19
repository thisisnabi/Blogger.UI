import React from 'react'

import DesktopLayout from './components/DesktopLayout'
import MobileLayout from './components/MobileLayout'

export type LayoutProps = { children: React.ReactNode }

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <DesktopLayout>{children}</DesktopLayout>
      <MobileLayout>{children}</MobileLayout>
    </>
  )
}

export default Layout
