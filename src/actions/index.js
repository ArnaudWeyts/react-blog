import 'whatwg-fetch';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=dankpepememesxddddd';

export function fetchPosts() {
  const url = `${ROOT_URL}/posts${API_KEY}`;
  const request =
    fetch(url)
     .then(function(response) {
      return response.json()
    }).then(function(json) {
      return json;
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    });

  return {
    type: FETCH_POSTS,
    payload: request
  }
}
