import 'whatwg-fetch';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=dankpepememesxdddd';

export function fetchPosts() {
  const url = `${ROOT_URL}/posts${API_KEY}`;
  const request =
    fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      return json;
    })
    .catch(function(ex) {
      console.log('parsing failed', ex)
    });

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPost(id) {
  const url = `${ROOT_URL}/posts/${id}${API_KEY}`;
  const request =
    fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      return json;
    })
    .catch(function(ex) {
      console.log('parsing failed', ex);
    });

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function createPost(props) {
  const url = `${ROOT_URL}/posts${API_KEY}`;
  const request = fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(props)
  })

  return {
    type: CREATE_POST,
    payload: request
  };
}
