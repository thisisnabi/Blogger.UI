import 'rc-pagination/assets/index.css'
import 'animate.css'
import 'react-toastify/dist/ReactToastify.css'

import Context from 'components/context'
import ScrollToTop from 'components/scroll-to-top'
import Toast from 'components/toast'
import AppRoutes from 'pages/_routes'
import Layout from 'pages/layout'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import ErrorBoundary from './pages/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <Toast />
      <BrowserRouter basename={'/'}>
        <ScrollToTop />
        <Context>
          <Layout>
            <AppRoutes />
          </Layout>
        </Context>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
