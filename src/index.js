import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'; // npm i redux-promise --save
// import { BrowserRouter, Route, Switch } from 'react-router-dom'

import SearchInput from './components/search_input';
import Recipes from './components/recipes';
import Recipe from './components/recipe';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
// we necessarily need to add ReduxPromise to applyMiddleware
const store = createStoreWithMiddleware(reducers);
// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <BrowserRouter>
//       <div>
//         <Switch>
//           <Route path='/posts/new' component={PostsNew} />
//         </Switch>
//       </div>
//     </BrowserRouter>
//   </Provider>,
//   document.querySelector('.container')
// )

ReactDOM.render(
  <Provider store={store}>
    <div>
      <SearchInput />
    </div>
  </Provider>,
  document.querySelector('.search__bar')
);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Recipes />
    </div>
  </Provider>,
  document.querySelector('.recipes')
);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Recipe />
    </div>
  </Provider>,
  document.querySelector('.recipe__details')
);
