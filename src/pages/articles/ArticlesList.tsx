import { CalendarIcon, ClockIcon, TagIcon } from '@heroicons/react/outline'
import notFound from 'assets/img/note-search.png'
import cx from 'classnames'
import { parseDate } from 'helpers/helpers'
import { Link } from 'react-router-dom'
import { GetArticlesResponse } from 'services/ApiGlobals'

type ArticlesListProps = {
  data?: GetArticlesResponse[]
  isNoData?: boolean
}

const ArticlesList = (props: ArticlesListProps) => {
  const { data, isNoData } = props

  if (isNoData)
    return (
      <div
        className={
          'flex flex-col items-center justify-center border border-2 border-dashed rounded-3 h-[240px]'
        }
      >
        <img className={''} src={notFound} alt={'not-found-gif'} />
        <h2 className={'font-semibold'}>Oops,Search Topic Not Found </h2>
      </div>
    )
  else
    return (
      <div>
        {data?.map((article) => (
          <div
            key={`article-${article?.articleId}`}
            className={'h-full space-y-2 border-b-2 last:border-b-0 py-3'}
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
            {/*--------info---------------*/}
            <div
              className={
                'flex items-center gap-x-5 text-gray1 flex-wrap leading-7'
              }
            >
              <div
                className={
                  'text-xs flex items-center text-gray1 font-medium shrink-0'
                }
              >
                <CalendarIcon className={'mr-2 w-4'} />
                {parseDate(article?.publishedOnUtc || '')}
              </div>
              <div className={'text-3 flex items-center shrink-0'}>
                <ClockIcon className={'mr-2 w-4'} />
                {article.readOnMinutes}{' '}
                {article?.readOnMinutes || 0 > 1 ? 'Minutes' : 'Minute'}
              </div>
              <div className={'text-3 flex items-center flex-wrap shrink-0'}>
                <TagIcon className={'mr-2 w-4 text-gray1'} />
                <div className={'flex items-center gap-x-1 flex-wrap shrink-0'}>
                  {article?.tags?.map((tag, index) => (
                    <Link
                      to={{ pathname: '/tags', search: `category=${tag}` }}
                      key={`tag-${tag}.${index}`}
                    >
                      <div
                        className={cx(
                          'leading-6 px-3 rounded-3 text-xs rounded-3 text-gray-600 bg-white'
                        )}
                      >
                        {tag}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
}

export default ArticlesList
