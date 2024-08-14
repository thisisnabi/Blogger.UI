import Loading from 'components/loading'
import { debounce } from 'lodash'
import React, { useEffect } from 'react'

type Props = {
  onMore: () => void
  children: React.ReactNode
  hasMore: boolean
}

const InfiniteScrollComponent = (props: Props) => {
  const { onMore, hasMore, children } = props

  const handleScroll = debounce(() => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement

    if (scrollTop + clientHeight >= scrollHeight - 5 && hasMore) {
      onMore()
    }
  }, 100)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasMore])

  return (
    <div>
      {children}

      {hasMore && <Loading />}
      {/*{!hasMore && <p style={{ textAlign: 'center' }}>No more data to load</p>}*/}
    </div>
  )
}

export default InfiniteScrollComponent
