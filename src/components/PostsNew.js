import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {createPost} from '../actions/index';

// renderField, changed to support type=textarea
const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className={`form-group ${touched && error ? 'has-danger' : ''}`}>
    <label>{label}</label>
    <div>
      {
        type === 'textarea' ?
          <textarea className="form-control" {...input} />
        :
          <input className="form-control" {...input} type={type}/>
      }
      {touched && (error && <div className="alert alert-danger" role="alert">{error}</div>)}
    </div>
  </div>
);

const PostsNew = (props) => {
  const {handleSubmit, submitting} = props;
  return (
    <form onSubmit={handleSubmit(createPost)}>
      <h3>Create a new post</h3>
      <Field name="title" component={renderField} type="text" label="Title" />
      <Field name="categories" component={renderField} type="text" label="Categories" />
      <Field name="content" component={renderField} type="textarea" label="Content" />
      <div>
        <button className="btn btn-primary" type="submit" disabled={submitting}>Submit</button>
      </div>
    </form>
  );
}

// Validates the form
const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  }
  if (!values.categories) {
    errors.categories = 'Required';
  }
  if (!values.content) {
    errors.content = 'Required';
  }
  return errors;
};

export default reduxForm({
  form: 'PostsNewForm',
  validate
})(PostsNew);
