import React, { Component } from 'react'
import PostListContext from '../../contexts/PostListContext'
import PostApiService from '../../services/post-api-service'
import { Section } from '../../components/Utils/Utils'
import PostListItem from '../../components/PostListItem/PostListItem'

export default class PostListPage extends Component {
  static contextType = PostListContext

  componentDidMount() {
    this.context.clearError()
    PostApiService.getPosts()
      .then(this.context.setpostList)
      .catch(this.context.setError)
  }

  renderPosts() {
    const { postList = [] } = this.context
    return postList.map(post =>
      <PostListItem
        key={post.id}
        post={post}
      />
    )
  }

  render() {
    const { error } = this.context
    return (
      <Section list className=' PostListPage'>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderPosts()}
      </Section>
    )
  }
}
