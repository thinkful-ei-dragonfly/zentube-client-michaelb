import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import myimage from './...'
import './LandingPage.css'

export default class LandingPage extends Component {
  render() {
    return (
      <div className='LandingPage'>
        <div className='Enter'>
            <Link to='/posts'>
              Enter Site
            </Link>
        </div>
      </div>
    )
  }
}
