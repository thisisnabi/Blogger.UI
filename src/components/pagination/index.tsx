import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import RemotePagination from 'rc-pagination'
import { PaginationProps } from 'rc-pagination/es/interface'

const Pagination = (props: PaginationProps) => {
  return (
    <RemotePagination
      align={'center'}
      className={'flex items-center border-0 !py-10'}
      selectPrefixCls={'!bg-red-300'}
      style={{ borderRadius: '10px', border: 'none' }}
      prevIcon={() => (
        <div>
          <ChevronLeftIcon className={'w-6'} />
        </div>
      )}
      nextIcon={() => (
        <div>
          <ChevronRightIcon className={'w-6'} />
        </div>
      )}
      {...props}
    />
  )
}

export default Pagination
