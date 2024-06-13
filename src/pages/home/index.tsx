import {CalendarIcon, ClockIcon, TagIcon} from "@heroicons/react/outline";
import FetchData from 'components/fetch-data'
import {parseDate} from 'helpers/helpers'

import API from '../../services/Api'

const Home = () => {
  const fetchArticles = () => {
    return API.articles
      .articlesList({Page: 1, Size: 20})
      .then((res) => res.data)
  }

  return (
    <FetchData request={fetchArticles} deps={[]}>
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
                    <CalendarIcon className={'mr-2 w-4'}/>
                    {parseDate(article?.publishedOnUtc || '')}
                  </div>
                  <div className={'text-3 flex items-center'}>
                    <ClockIcon className={'mr-2 w-4'}/>
                    {article.readOnMinutes}
                    min Read
                  </div>
                  <div className={'text-3 flex items-center'}>
                    <TagIcon className={'mr-2 w-4'}/>
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
