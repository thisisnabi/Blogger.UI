import SvgNote from 'assets/icons/Note'
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
                  <h2 className={'shrink-0'}>
                    {archive?.year} {getMonthName(archive?.month)}
                  </h2>
                  <span
                    className={'w-full h-[1px] border-t-[1px] border-slate-300'}
                  />
                  <div
                    className={
                      'shrink-0 text-caption-gray text-[12px] flex items-center'
                    }
                  >
                    <SvgNote className={'mx-1 w-4 h-4'} />
                    {archive?.articles?.length} Post
                  </div>
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
                          'rounded-2 bg-white !shrink-0 w-[40px] h-[24px] text-gray1 text-center content-center text-xs'
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
