import React from 'react'
import ReactDOM from 'react-dom'
import LoginPage from '../../routes/LoginPage/LoginPage'
import { BrowserRouter } from 'react-router-dom'
import PublicOnlyRoute from './PublicOnlyRoute'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <PublicOnlyRoute
        path={'/login'}
        component={LoginPage}
      />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
