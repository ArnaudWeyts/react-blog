import React from 'react'
import { connect } from 'react-redux'
import { submit } from 'redux-form'

const RemoteSubmitButton = ({ dispatch }) =>
  <button
    type="button"
    className="btn btn-primary"
    onClick={() => dispatch(submit('PostsNewForm'))}>Submit</button>

export default connect()(RemoteSubmitButton)