import Icon from 'font-icon/Icon'
import books from 'img/pictuer-books.png'

const MyBooks = () => {
  return (
    <div className={'w-full bg-white rounded-3 p-6 '}>
      <div className={'flex items-center gap-x-2 font-medium mb-[10px]'}>
        <Icon size={24} icon={'Notebook'} className={'text-primary'} />
        <span className={'text-4'}>My Books</span>
      </div>
      <img
        src={books}
        alt={'my-book'}
        className={'w-[216px] h-[130px] rounded-2'}
      />
    </div>
  )
}

export default MyBooks
