import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NiceDate, Hyph } from '../Utils/Utils'
import config from '../../config'
import './PostListItem.css'

export default class PostListItem extends Component {
  render() {
    const { post } = this.props
    const video = config.VIDEOS_DIR + post.file_name
    return (
      <Link to={`/post/${post.id}`} className='PostListItem'>
        <p>
          <video width="320" height="240">
            <source src={video} type="video/mp4"/>
          </video>
        </p>
        <header className='PostListItem__header'>
          <h2 className='PostListItem__heading'>
            {post.title}
          </h2>
          <PostDate post={post} />
        </header>
        <footer className='PostListItem__footer'>
          <Postcategory post={post} />
          {post.author.id && <>
            <Hyph />
            <PostAuthor post={post} />
          </>}
          {/* <PostCommentCount post={post} /> */}
        </footer>
      </Link>
    )
  }
}

function Postcategory({ post }) {
  return (
    <span className='PostListItem__category'>
      {/* <CategoryIcon category={post.category} /> */}
      {' '}
      {post.category}
    </span>
  )
}

function PostDate({ post }) {
  return (
    <span className='PostListItem__date'>
      <NiceDate
        date={post.date_created}
      />
    </span>
  )
}

function PostAuthor({ post }) {
  return (
    <span className='PostListItem__author'>
      {post.author.full_name}
    </span>
  )
}

// function PostCommentCount({ post }) {
//   return (
//     <span
//       className='PostListItem__comment-count fa-layers fa-fw'
//     >
//       <FontAwesomeIcon size='lg' icon='comment' />
//       <span>
//         className='fa-layers-text fa-inverse'>
//         {post.number_of_comments}
//       </span>
//     </span>
//   )
// }
