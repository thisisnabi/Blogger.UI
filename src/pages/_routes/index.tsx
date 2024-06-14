import React from 'react'
import { RouteProps } from 'react-router/dist/lib/components'
import { Route, Routes } from 'react-router-dom'

const Home = React.lazy(() => import('pages/home'))
const PageNotFound = React.lazy(() => import('pages/404'))
const Tags = React.lazy(() => import('pages/tags'))

const routes: RouteProps[] = [
  { path: '/', element: <Home /> },
  { path: '/tags', element: <Tags /> },
]

const AppRoutes = () => {
  return (
    <React.Suspense fallback={<div>loading</div>}>
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
