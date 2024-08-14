import MobileLayout from 'pages/layout/components/MobileLayout'
import React, { useEffect, useState } from 'react'

import DesktopLayout from './components/DesktopLayout'

export type LayoutProps = { children: React.ReactNode }

const Layout = ({ children }: LayoutProps) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  if (isMobile) return <MobileLayout>{children}</MobileLayout>
  else return <DesktopLayout>{children}</DesktopLayout>
}

export default Layout
