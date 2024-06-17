import loadingGif from 'assets/loading.gif'
import React from 'react'

const Loading = () => {
  return (
    <div className={'w-full h-full'}>
      <img
        src={loadingGif}
        alt={'loading-spinner...'}
        className={'w-[100px] mx-auto'}
      />
    </div>
  )
}

export default Loading
