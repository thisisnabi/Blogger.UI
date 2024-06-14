import 'rc-pagination/assets/index.css'

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

      {/*<Routes>*/}
      {/*  <Route path='/' element={<HomePage />}></Route>*/}
      {/*  <Route path='/about' element={<About />}></Route>*/}
      {/*  <Route path='/archive' element={<Archive />}></Route>*/}
      {/*  <Route path='/tags' element={<Tags />}></Route>*/}
      {/*  <Route path='/tags/category/:id' element={<Category />}></Route>*/}
      {/*  <Route path='/subscribe' element={<Subscribe />}></Route>*/}
      {/*  <Route path='/archive/:id' element={<Post />}></Route>*/}
      {/*  <Route path='/*' element={<PageNotFound />}></Route>*/}
      {/*</Routes>*/}
    </ErrorBoundary>
  )
}

export default App
