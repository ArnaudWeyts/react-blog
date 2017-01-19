import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {createPost} from '../actions/index';

class PostsNew extends Component {
  handleSubmit = (values) => {
    console.log(values);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Create a new post</h3>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <Field name="title" component="input" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="categories">Categories</label>
          <Field name="categories" component="input" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <Field name="content" component="textarea" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'PostsNewForm',
}, null, {createPost})(PostsNew);
