import { CalendarIcon, ClockIcon, TagIcon } from '@heroicons/react/outline'
import { parseDate } from 'helpers/helpers'
import { Link } from 'react-router-dom'
import { GetArticlesResponse } from 'services/ApiGlobals'

type ArticlesListProps = {
  data?: GetArticlesResponse[]
}

const ArticlesList = (props: ArticlesListProps) => {
  const { data } = props
  return (
    <div>
      {data?.map((article) => (
        <div
          key={`article-${article?.articleId}`}
          className={'space-y-2 border-b-2 last:border-b-0 py-3'}
        >
          <Link
            to={`/articles/${article?.articleId}`}
            className={
              'text-4 font-bold lg:text-[24px] lg:font-semibold transition-all'
            }
          >
            {article?.title}
          </Link>
          <p className={'text-gray1 text-[13px] font-normal'}>
            {article?.summary}
          </p>
          <div className={'flex items-center gap-x-5 text-gray1'}>
            <div className={'text-3 flex items-center'}>
              <CalendarIcon className={'mr-2 w-4'} />
              {parseDate(article?.publishedOnUtc || '')}
            </div>
            <div className={'text-3 flex items-center'}>
              <ClockIcon className={'mr-2 w-4'} />
              {article.readOnMinutes}
              min Read
            </div>
            <div className={'text-3 flex items-center'}>
              <TagIcon className={'mr-2 w-4'} />
              {article?.tags?.map((tag) => tag + '  ')}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ArticlesList
