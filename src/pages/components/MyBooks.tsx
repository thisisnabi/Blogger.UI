import { ClipboardListIcon } from '@heroicons/react/outline'
import books from 'assets/img/live-calender.jpg'

const MyBooks = () => {
  return (
    <div className={'w-full bg-white rounded-3 pt-4 shadow-md'}>
      <div className={'flex items-center gap-x-2 font-medium mb-[10px] px-6'}>
        <ClipboardListIcon className={'text-primary w-5'} />
        <span className={'text-4'}>My Calender</span>
      </div>

      <a href={'https://lu.ma/thisisnabi'} target={'_blank'} rel="noreferrer">
        <img
          src={books}
          alt={'my-calender'}
          className={'w-full h-[130px] rounded-2 rounded-t-none object-cover '}
        />
      </a>
    </div>
  )
}

export default MyBooks
