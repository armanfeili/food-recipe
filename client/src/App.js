import React, { Component } from 'react';
// import logo from './logo.svg'
import { BrowserRouter as Router } from 'react-router-dom';
// BrowserRouter is used for preparing this ability to use button of browser to go back and forward to last and next page
import { Provider } from 'react-redux';

// import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'; // npm i redux-promise --save

// Provider is actually a React component,and it provides our application with store which holds our application state
// so it should wrap around all of our App , even the <Router>, and it takes in our store
// for creating store, we use a method called creatStore() and it gets 3 arguments: 1)root reducer of combineReducers 2)initial state 3)enhancer like applyMiddleware()

// import store from './store'
// // store is created in seprate file

import SearchInput from './components/search_input';
import Recipes from './components/recipes';
import Recipe from './components/recipe';
import reducers from './reducers';

// import Navbar from './components/layout/Navbar'
// import SideNav from './components/layout/SideNav'
// import BioButton from './components/layout/BioButton'
// import BioPart from './components/layout/BioPart'
// import Skills from './components/layout/Skills'
// import SkillBar from './components/layout/SkillBar'
// import WorkExamples from './components/layout/WorkExamples'
// import Footer from './components/layout/Footer'

// import './App.css'
import './style/css/animate.css';
import './style/css/grid.css';
// import './style/vendors/css/ionicons.min.css'
import './style/css/normalize.css';
import './style/css/style.css';
import './style/css/quaries.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
// we necessarily need to add ReduxPromise to applyMiddleware
const store = createStoreWithMiddleware(reducers);

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          {/* Router here is actualy BrowserRouter */}
          <div className='App'>
            {/* Navbar and Footer always display but Landing is sth we want to display in "/" route. so we used <Route /> */}
            <SearchInput />
            <br/>
            <Recipes />
            <br/>
            <Recipe />
            {/* <Route exact path='/' component={BioPart} /> */}
            {/* exact keyword helps to show component at exacly this specific route */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
