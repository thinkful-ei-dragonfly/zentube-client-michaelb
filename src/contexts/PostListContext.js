import React, { Component } from 'react'

const PostListContext = React.createContext({
  postList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setpostList: () => {},
})
export default PostListContext

export class PostListProvider extends Component {
  state = {
    postList: [],
    error: null,
  };

  setpostList = postList => {
    this.setState({ postList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      postList: this.state.postList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setpostList: this.setpostList,
    }
    return (
      <PostListContext.Provider value={value}>
        {this.props.children}
      </PostListContext.Provider>
    )
  }
}
