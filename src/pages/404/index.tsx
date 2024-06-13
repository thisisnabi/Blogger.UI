import PNF from 'assets/img/404.png'

const PageNotFound = () => {
  return (
    <div className={'w-full h-full flex items-center justify-center'}>
      <img src={PNF} alt={'page-not-found'} />
    </div>
  )
}

export default PageNotFound
