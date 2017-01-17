import {FETCH_POSTS} from '../actions/index';

const INITIAL_STATE = {
  all: [],
  post: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return [...action.payload, state];
    default:
      return state;
  }
}
