import { CalendarIcon, ClockIcon, TagIcon } from '@heroicons/react/outline'
import notFound from 'assets/img/not-found.png'
import cx from 'classnames'
import { parseDate } from 'helpers/helpers'
import { Link } from 'react-router-dom'
import { GetArticlesResponse } from 'services/ApiGlobals'

type ArticlesListProps = {
  data?: GetArticlesResponse[]
  isLoading: boolean
}

const colors = [
  '230,147,173',
  '224,183,226',
  '186,166,206',
  '219,240,246',
  '79,192,230',
]

const ArticlesList = (props: ArticlesListProps) => {
  const { data, isLoading } = props

  if (!data?.length && !isLoading)
    return (
      <div className={'flex flex-col items-center justify-center'}>
        <img className={'w-[300px]'} src={notFound} alt={'not-found-gif'} />
        <h3 className={'text-blue-700'}>Oops! No Data Found!</h3>
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
                  'text-xs flex items-center text-blue-800 font-medium shrink-0'
                }
              >
                <CalendarIcon className={'mr-2 w-4'} />
                {parseDate(article?.publishedOnUtc || '')}
              </div>
              <div
                className={'text-3 flex items-center text-blue-950 shrink-0'}
              >
                <ClockIcon className={'mr-2 w-4'} />
                {article.readOnMinutes}{' '}
                {article?.readOnMinutes || 0 > 1 ? 'minutes' : 'minute'}
              </div>
              <div className={'text-3 flex items-center flex-wrap shrink-0'}>
                <TagIcon className={'mr-2 w-4 text-gray2'} />
                <div className={'flex items-center gap-x-1 flex-wrap shrink-0'}>
                  {article?.tags?.map((tag, index) => (
                    <span
                      key={`tag-${tag}.${index}`}
                      style={{ backgroundColor: `rgb(${colors[index]}, 60%)` }}
                      className={cx(
                        'leading-6 px-3 rounded-3 text-xs rounded-3 text-gray-600'
                      )}
                    >
                      {tag}
                    </span>
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
