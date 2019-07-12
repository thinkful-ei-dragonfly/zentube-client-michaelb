import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import { PostListProvider } from './contexts/PostListContext'
import { PostProvider } from './contexts/PostContext'
import App from './components/App/App'
import './index.css'

ReactDOM.render(
<BrowserRouter>
    <PostListProvider>
      <PostProvider>
        <App />
      </PostProvider>
    </PostListProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.unregister()
