import PNF from 'assets/img/404.png'

const PageNotFound = () => {
  return (
    <div className={'w-full h-full'}>
      <img src={PNF} alt={'page-not-found'} className={'mx-auto'} />
    </div>
  )
}

export default PageNotFound
