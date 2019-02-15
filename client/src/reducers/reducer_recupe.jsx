import { FETCH_RECIPES, FETCH_RECIPE } from "../actions";
// import _ from "lodash";

// import uniqid from "uniqid";

export default function(state = [], action) {
  switch (action.type) {
    // case FETCH_RECIPES:
    //   // returns an array with 30 objects that the keys are 'recipe_id' and the values are the actual object of that recipe
    //   // console.log("action receaved", action);

    //   // const recipes = _.mapKeys(action.payload, "recipe_id");
    //   // the code above returns an object with key of "recipe_id" and value of actual object
    //   // but here we divide the whole object into 5 objects. here is the description:

    //   // we caught the main array with 30 objects
    //   const recipes = action.payload.data.recipes; // [{}, {}, {}, {}, {}, ...]

    //   const numberOfRecipes = recipes.length; // 30
    //   const items = numberOfRecipes / 5; // number of items in any Lines: 6

    //   // we've created an array "tempArr" which will take 5 objects of 6 objects.
    //   // let tempArr = []; // array of 5 array
    //   let tempArr = []; // array of 5 array
    //   let tempObj = {};
    //   // it starts at i=0, till 30, and in any time, i will pluses 6 . so this loop runs 5 times.
    //   // slice() method,has 2 arguments which first is the start point and second is the end point
    //   // so it starts from 0 to 6, then 6 to 12, then 12 to 18 ... to 30
    //   // then any time we create 'newArr', we change it to 6 objects with id of "recipe_id" and value of actual object
    //   for (let k = 1, i = 0; i < recipes.length; i += items) {
    //     const newArr = recipes.slice(i, i + items);
    //     const obj = _.mapKeys(newArr, "recipe_id");
    //     // obj.number = "2";
    //     // k++;
    //     // console.log(obj);
    //     // console.log(k);
    //     // const red = _.mapKeys(obj, "number");
    //     // console.log(red);

    //     tempArr.push(obj);
    //     // tempArr.push(newArr);

    //     function toObject(tempArr) {
    //       var rv = {};
    //       for (var i = 0; i < tempArr.length; ++i) rv[i] = tempArr[i];
    //       return rv;
    //     }
    //     tempObj = toObject(tempArr);
    //     // tempArr = { ...obj };
    //     // console.log(tempArr);
    //   }

    //   // return tempArr;
    //   return tempObj;
    //   // syntax: return _.mapKeys(action.payload.data, "id");
    //   break;
    case FETCH_RECIPE:
      // return action.payload.data.recipes;
      // return {
      //   ...state,
      //   [action.payload.data.recipe.recipe_id]: action.payload.data.recipe
      // };
      //   return {
      //     ...state,
      //     [action.payload.data.recipe.recipe_id]: action.payload.data.recipe
      //   };
      return action.payload.data.recipe;
    default:
      return state;
  }
}

// const arr = _.values(recipes); // [{},{},{},{},{},...]
