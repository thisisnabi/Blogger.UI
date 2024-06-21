import SvgNote from 'assets/icons/Note'
import classNames from 'classnames'
import { useSearchParams } from 'react-router-dom'
import { GetTagsResponse } from 'services/ApiGlobals'

type Props = {
  selected?: string | null
  onSelect?: (value: string | null | undefined) => void
  tags: GetTagsResponse[]
  key?: string
}

const TagsList = (props: Props) => {
  const { selected, onSelect, tags, key } = props
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedCategory = selected || searchParams.get('category')

  return (
    <div className={classNames('flex flex-wrap gap-3')}>
      {tags?.map((tag, index) => (
        <div
          key={`${key}-tag-${index}`}
          className={classNames(
            'bg-white flex items-center shadow-md rounded-4 py-2 px-3 text-[13px] space-x-3 whitespace-nowrap cursor-pointer',
            'transform transition-transform duration-200 ease-in-out hover:scale-110 focus:scale-110 active:scale-105',
            // loading ? 'pointer-events-none' : 'pointer-events-auto',
            selectedCategory == tag?.name ? '!bg-primary text-white' : null
          )}
          onClick={() => {
            if (tag?.name) setSearchParams({ category: tag?.name })
            if (onSelect) onSelect(tag?.name)
          }}
        >
          <div>{tag?.name}</div>
          <div className={'scale-125 text-caption-gray flex items-center'}>
            <SvgNote className={'text-caption-gray'} />

            {tag?.count}
          </div>
        </div>
      ))}
    </div>
  )
}

export default TagsList
