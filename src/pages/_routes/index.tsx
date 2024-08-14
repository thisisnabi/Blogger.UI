import React from 'react'
import { RouteProps } from 'react-router/dist/lib/components'
import { Route, Routes } from 'react-router-dom'

import Loading from '../../components/loading'

const Home = React.lazy(() => import('pages/home'))
const PageNotFound = React.lazy(() => import('pages/404'))
const Tags = React.lazy(() => import('pages/tags'))
const About = React.lazy(() => import('pages/about'))
const Subscribe = React.lazy(() => import('pages/subscribe'))
const Archives = React.lazy(() => import('pages/archives'))
const ArticleDetail = React.lazy(() => import('pages/articles/detail'))

const routes: RouteProps[] = [
  { path: '/', element: <Home /> },
  { path: '/tags', element: <Tags /> },
  { path: '/about', element: <About /> },
  { path: '/subscribe', element: <Subscribe /> },
  { path: '/archives', element: <Archives /> },
  { path: '/articles/:id', element: <ArticleDetail /> },
]

const AppRoutes = () => {
  return (
    <React.Suspense
      fallback={
        <div className={'w-full h-full'}>
          <Loading className={'m-auto'} />
        </div>
      }
    >
      <Routes>
        {routes.map((node, index) => (
          <Route key={`route-${index}`} {...node} />
        ))}
        <Route path={'*'} element={<PageNotFound />} />
      </Routes>
    </React.Suspense>
  )
}

export default AppRoutes
