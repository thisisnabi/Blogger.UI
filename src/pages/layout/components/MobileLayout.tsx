import cx from 'classnames'
import React from 'react'

import { LayoutProps } from '../index'
import Navbar from './Navbar'

const MobileLayout = React.memo(function MobileLayout({
  children,
}: LayoutProps) {
  return (
    <div className={cx('max-w-full')}>
      <Navbar />
      <div className={'px-4 py-4'}>{children}</div>
    </div>
  )
})

export default MobileLayout
