import './style/_base.css'
import './style/scrollbar.css'
import './style/pagination-style.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const container = document.getElementById('root')

if (container) {
  const root = ReactDOM.createRoot(container)
  root.render(<App />)
} else {
  console.error('Failed to find the root element')
}
