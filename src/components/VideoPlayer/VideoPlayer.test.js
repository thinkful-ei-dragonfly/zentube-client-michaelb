import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import VideoPlayer from './VideoPlayer'

const comments = [
  {
    id: 1,
    text: 'First test comment!',
    post_id: 1,
    comment_time: "1.000000",
    user_id: 1,
    date_created: new Date('2029-01-22T16:28:32.615Z'),
  }
]

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <VideoPlayer src={'test'} comments={''} />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
