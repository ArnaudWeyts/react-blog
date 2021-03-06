import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, browserHistory} from 'react-router';

import {fetchPost, deletePost} from '../actions/index';

class PostsShow extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
    .then(() => {
      browserHistory.push('/');
    });
  }

  render() {
    const {post} = this.props;
    if (!post) {
      return <div>Loading</div>
    }
    return (
      <div>
        <Link to="/">Back to posts</Link>
        <button
          className="btn btn-danger float-right"
          onClick={this.onDeleteClick.bind(this)}>
            Delete post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {post: state.posts.post};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);