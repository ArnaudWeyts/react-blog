import React, {Component} from 'react';
import PostsNewForm from './PostsNewForm';
import SubmitButton from './SubmitButton';

class PostsNew extends Component {
  render() {
    return (
      <div>
        <PostsNewForm />
        <SubmitButton />
      </div>
    );
  }
}

export default PostsNew;