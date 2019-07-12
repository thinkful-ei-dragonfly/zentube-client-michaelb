import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import PostListItem from './PostListItem'

const post = {
    id: 1,
    title: 'First test post!',
    category: 'How-to',
    author: {id: 1},
    file_name: 'sample.mp4',
    date_created: new Date('2029-01-22T16:28:32.615Z'),
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
  }

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <PostListItem
        key={post.id}
        post={post}
      />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
