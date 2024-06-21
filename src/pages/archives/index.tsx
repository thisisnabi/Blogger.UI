import cx from 'classnames'
import FetchData from 'components/fetch-data'
import { getMonthName } from 'helpers/helpers'
import Dot from 'pages/archives/components/Dot'
import { Link } from 'react-router-dom'
import API from 'services/Api'

const Archives = () => {
  const fetchArchives = () => {
    return API.articles.archiveList().then((res) => res?.data)
  }

  return (
    <FetchData request={fetchArchives} deps={[]}>
      {(data) => (
        <div className={'ml-5 mr-2'}>
          {data?.map((archive, index) => {
            return (
              <div key={`archive-${index}`}>
                {/*----- date info ------*/}
                <div className={'flex items-center gap-x-2 after:block'}>
                  <Dot />
                  <h2>
                    {archive?.year} {getMonthName(archive?.month)}
                  </h2>
                </div>
                {/*-------------*/}
                <div
                  className={'space-y-6 py-8 border-l-2 ml-[7px] lg:ml-[10px]'}
                >
                  {archive?.articles?.map((article, articleIndex) => (
                    <div
                      key={`archive-${index}-article-${articleIndex}`}
                      className={
                        " before:content-['----'] before:text-slate-300 flex items-center gap-x-2 shrink-0 before:shrink-0"
                      }
                    >
                      <div
                        className={cx(
                          'rounded-2 bg-white w-[40px] h-[24px] text-gray1 w-fit text-center content-center text-xs'
                        )}
                      >
                        {article?.day}
                      </div>
                      <Link
                        to={`/articles/${article?.articleId}`}
                        className={'text-[12px]'}
                      >
                        {article?.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </FetchData>
  )
}

export default Archives
