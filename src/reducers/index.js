import { combineReducers } from 'redux';
import RecipesReducer from './reducer_recipes';
import RecipeReducer from './reducer_recupe';
/*
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import PostsReducer from './reducer_posts'
*/

const rootReducer = combineReducers({ // this is our state application including "recipes"
  recipes: RecipesReducer,
  recipe: RecipeReducer
});

// const rootReducer = combineReducers({ // this is our state application including "posts" & "form"
//   posts: PostsReducer,
//   form: formReducer
// })

export default rootReducer;
