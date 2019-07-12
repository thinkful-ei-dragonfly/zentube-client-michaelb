import React, { Component } from 'react'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import PostContext, { nullPost } from '../../contexts/PostContext'
import PostApiService from '../../services/post-api-service'
import { NiceDate, Hyph, Section } from '../../components/Utils/Utils'
import CommentForm from '../../components/CommentForm/CommentForm'
import config from '../../config'
import './PostPage.css'

export default class PostPage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = PostContext

  componentDidMount() {
    const { postId } = this.props.match.params
    this.context.clearError()
    PostApiService.getPost(postId)
      .then(this.context.setPost)
      .catch(this.context.setError)
    PostApiService.getPostComments(postId)
      .then(this.context.setComments)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearPost()
  }

renderPost() {
  const { post, comments } = this.context
  const video = config.VIDEOS_DIR + post.file_name
  // const video = post.file_name
  return <>
    <VideoPlayer src={video} comments={comments} />
    <h2>{post.title}</h2>
      <p>
        <Postcategory post={post} />
        {post.author.id && <>
          <Hyph />
          <PostAuthor post={post} />
        </>}
        <Hyph />
        <NiceDate date={post.date_created} />
      </p>
      <PostContent post={post} />
      <PostComments comments={comments} />
      <CommentForm />
  </>
}

render() {
  const { error, post } = this.context
  let content
  if (error) {
    content = (error.error === `post doesn't exist`)
      ? <p className='red'>post not found</p>
      : <p className='red'>There was an error</p>
  } else if (!post.id) {
    content = <div className='loading' />
  } else {
    content = this.renderPost()
  }
  return (
    <Section className='postPage'>
      {content}
    </Section>
  )
}
}

function Postcategory({ post }) {
  return (
    <span className='postPage__category'>
      {/* <CategoryIcon category={post.category} />
      {' '} */}
      {post.category}
    </span>
  )
}

function PostAuthor({ post = nullPost }) {
  return (
    <span className='postPage__author'>
      {post.author.full_name}
    </span>
  )
}

function PostContent({ post }) {
  return (
    <p className='postPage__content'>
      {post.content}
    </p>
  )
}

function PostComments({ comments = [] }) {
  return (
    <ul className='postPage__comment-list'>
      {comments.map(comment =>
        <li key={comment.id} className='postPage__comment'>
          <p className='postPage__comment-text'>
            {comment.text}
            {/* {comment.comment_time}
            <FontAwesomeIcon icon={faComment} /> */}
          </p>
          <p className='postPage__comment-user'>
            {comment.user.full_name}
          </p>
        </li>
      )}
    </ul>
  )
}