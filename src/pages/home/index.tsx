import FetchData from 'components/fetch-data'
import Icon from 'font-icon/Icon'
import { parseDate } from 'helpers/helpers'
import API from 'services/config'

const Home = () => {
  const fetchArticles = () => {
    return API.articles
      .articlesList({ Page: 1, Size: 20 })
      .then((res) => res?.data)
  }

  return (
    <FetchData req={fetchArticles} dependencies={[]}>
      {(data) => {
        return (
          <div>
            {data?.map((article) => (
              <div
                key={`article-${article?.articleId}`}
                className={'space-y-2 border-b-1 last:border-b-0 py-2'}
              >
                <p
                  className={'text-4 font-bold lg:text-[24px] lg:font-semibold'}
                >
                  {article?.title}
                </p>
                <p className={'text-gray1 text-[13px] font-normal'}>
                  {article?.summary}
                </p>
                <div className={'flex items-center gap-x-5 text-gray1'}>
                  <div className={'text-3 flex items-center'}>
                    <Icon width={16} icon={'Calendar'} className={'mr-2'} />
                    {parseDate(article?.publishedOnUtc || '')}
                  </div>
                  <div className={'text-3 flex items-center'}>
                    <Icon width={16} icon={'Clock'} className={'mr-2'} />
                    {article.readOnMinutes}
                    min Read
                  </div>
                  <div className={'text-3 flex items-center'}>
                    <Icon width={16} icon={'Tag'} className={'mr-2'} />
                    {article?.tags?.map((tag) => tag + '  ')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      }}
    </FetchData>
  )
}

export default Home
