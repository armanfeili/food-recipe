import axios from 'axios';

export const FETCH_RECIPES = 'fetch_recipes';
export const FETCH_RECIPE = 'fetch_recipe';

const API_KEY_EXTRA = 'c1fd4e63ec913022560e0e90749c14af';
// const API_KEY = '4ca639060ea9f009390cf70b8fb06e5a'
const ROOT_URL_SEARCH = 'http://food2fork.com/api/search';
const ROOT_URL_RECIPE = 'http://food2fork.com/api/get';
const proxy = 'https://cors-anywhere.herokuapp.com/';

export function getRecipes (query) {
  const request = axios.get(
    `${proxy}${ROOT_URL_SEARCH}?key=${API_KEY_EXTRA}&q=${query}`
  );
  // console.log(request)
  console.log(request);

  return {
    type: FETCH_RECIPES,
    payload: request // returns an array with 30 objects
  };

  // we only have to pass request as an action. Not request.data.recipes!
  // why? because promise stops action to get resolved, then let it be sent to reducers
  // if we use request.data , we've gotten access to sth which doesn't exist

// return function (dispatch) {
//   return API.fetchComments(postId).then(comments => {
//     // dispatch
//     dispatch({
//       type: BIND_COMMENTS,
//       comments,
//       postId
//     })
//   })
// }
};

export function getRecipe (rId) {
  const request = axios.get(`${proxy}${ROOT_URL_RECIPE}?key=${API_KEY_EXTRA}&rId=${rId}`);

  // console.log(request)

  return {
    type: FETCH_RECIPE,
    payload: request
  };
};
