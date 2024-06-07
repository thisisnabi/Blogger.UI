import React from 'react'
import { RouteProps } from 'react-router/dist/lib/components'
import { Route, Routes } from 'react-router-dom'

const Home = React.lazy(() => import('pages/home'))

const routes: RouteProps[] = [{ path: '/', element: <Home /> }]

const AppRoutes = () => {
  return (
    <React.Suspense fallback={<div>loading</div>}>
      <Routes>
        {routes.map((node, index) => (
          <Route key={`route-${index}`} {...node} />
        ))}
      </Routes>
    </React.Suspense>
  )
}

export default AppRoutes
