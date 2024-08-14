import loadingGif from 'assets/loading.gif'
import classNames from 'classnames'
import React from 'react'

const Loading = ({ className }: { className?: string }) => {
  return (
    <div className={'w-full h-full'}>
      <img
        src={loadingGif}
        alt={'loading-spinner...'}
        className={classNames('w-[50px] mx-auto', className)}
      />
    </div>
  )
}

export default Loading
