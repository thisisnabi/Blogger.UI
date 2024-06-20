import 'rc-pagination/assets/index.css'
import 'animate.css'

import ScrollToTop from 'components/scroll-to-top'
import AppRoutes from 'pages/_routes'
import Layout from 'pages/layout'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import ErrorBoundary from './pages/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter basename={'/'}>
        <ScrollToTop />

        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
