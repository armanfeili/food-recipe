import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

// import { FETCH_RECIPE } from "./../actions";

import uniqid from "uniqid";
import { getRecipe } from "../actions/index";

export class Recipes extends Component {
  constructor(props) {
    super(props);

    // this.recipes = this.props.recipes;

    this.createUl = this.createUl.bind(this);
    this.createLi = this.createLi.bind(this);
    this.onLiClicked = this.onLiClicked.bind(this);
    // this.convertObjects = this.convertObjects.bind(this);
  }

  // createLi() {
  // return <li>2</li>;
  // let arr = [];
  // return this.props.recipes.map((el, i) => {
  //   return _.map(el[i], (element, index) => {
  //     <li key={element.recipe_id}>{element.title}</li>;
  //   });
  // });
  // this.red.map((el, i) => {
  //   <li key={el.recipe_id}>{el.title}</li>;
  // });
  // return;
  // this.props.recipes.map((el, i) => {
  //   console.log(el);
  //   el[i].map((element, index) => {
  //     console.log(index);
  //   });
  // });
  // let i;Z
  // // for (i = 0; i < 1; i++) {
  // for (i = 0; i < 5; i++) {
  //   console.log(i);
  //   this.props.recipes[i].map((cur, j) => {
  //     //   _.map(cur[i], recipe => {
  //     //     // console.log(recipe);
  //     // console.log(cur);
  //     // j++;
  //     // console.log(i);
  //     // console.log(j);
  //     return <li key={uniqid()}>2</li>;
  //     //   });
  //     //   cur[i].map((cur, i) => {
  //     //     return <li key={cur.recipe_id}>{cur.title}</li>;
  //     //   });
  //   });
  // }
  // // }
  //{objects.map((object, i) => <ObjectRow obj={object} key={i} />)}
  // return _.map(this.props.posts, post => {
  //     return (
  //         <li className="list-group-item" key={post.id}>
  //             <Link to={`/posts/${post.id}`}>{post.title}</Link>
  //         </li>
  //     );
  // });
  //   this.props.recipes[i].map(() => {
  //     return <li>hey</li>;
  //   });
  // }

  // createUl() {
  //   return this.props.recipes.map(el => {
  //     return (
  //       <div className="col span-1-of-5 recipes-list">
  //         <ul className="">
  //           {el.map(el => {
  //             return (
  //               <li className="" key={el.recipe_id.toString()}>
  //                 {el.title}
  //               </li>
  //             );
  //           })}
  //         </ul>
  //       </div>
  //     );
  //   });

  /***************************************/
  /***************************************/
  /***************************************/

  onLiClicked() {}

  createLi(el) {
    // console.log(el);

    return _.map(el, el => {
      // console.log(el.recipe_id);
      // const id = el.recipe_id;
      const link = `#${el.recipe_id}`;
      return (
        <li className="recipes__item" key={link}>
          <a
            className="recipes__link"
            href={link}
            onClick={() => this.props.getRecipe(el.recipe_id)}
          >
            <figure className="recipes__fig">
              <img src={el.image_url} className="recipes__img" alt={el.title} />
            </figure>
            <div className="description">
              <h5 className="recipes__title">{el.title}</h5>
              <p className="recipes__publisher">{el.publisher}</p>
            </div>
          </a>
        </li>
      );
    });
    // return red;
  }

  createUl() {
    // console.log(this.props.recipes);

    const recipes = this.props.recipes;
    return _.map(recipes, el => {
      return (
        <div className="col span-1-of-5 recipes__list" key={uniqid()}>
          <ul className="recipes__ul">{this.createLi(el)}</ul>
        </div>
      );
    });
  }

  // console.log(el);

  // return <ul className="">{this.createLi()}</ul>;

  //   console.log("red");
  // console.log(red);

  // for (let i = 0; i < 5; i++) {
  //   return <ul>{this.createLi()}</ul>;
  // }
  // <div>{this.props.recipes}</div>

  // <div>2</div>;

  /***************************************/
  /***************************************/
  /***************************************/

  // onLiClicked() {}

  // createUl() {
  // console.log(this.props.recipes);

  // return _.map(this.props.recipes, el => {
  //   return (
  //     <div className="col span-1-of-5 recipes-list">
  //       <ul className="recipe_ul">
  //         {_.map(el, el => {
  //           const link = `#${el.recipe_id}`;
  //           let id = `${el.recipe_id}`;
  //           return (
  //             <li
  //               className="recipe-item"
  //               key={el.title}
  //               onClick={() => this.props.getRecipe(id)}
  //             >
  //               {console.log(id)}
  //               <a className="recipe-link" href={link}>
  //                 <figure className="recipe__fig">
  //                   <img
  //                     src={el.image_url}
  //                     className="recipe__img"
  //                     alt={el.title}
  //                   />
  //                 </figure>
  //                 <div className="description">
  //                   <h5 className="recipe__title">{el.title}</h5>
  //                   <p className="recipe__publisher">{el.publisher}</p>
  //                 </div>
  //               </a>
  //             </li>
  //           );
  //         })}
  //       </ul>
  //     </div>
  //   );
  // });
  // console.log(el);

  // return <ul className="">{this.createLi()}</ul>;

  //   console.log("red");
  // console.log(red);

  // for (let i = 0; i < 5; i++) {
  //   return <ul>{this.createLi()}</ul>;
  // }
  // <div>{this.props.recipes}</div>

  // <div>2</div>;

  // }

  render() {
    // const { recipes } = this.props;
    // console.log(this.props.recipes);
    let recipesContent;
    if (this.props.recipes) {
      recipesContent = (
        <div className="recipes__container">{this.createUl()}</div>
      );
    }
    return (
      <section className="recipes__section">
        <h2>Recipes</h2>
        {/* <div class="recipes"></div> */}
        <div className="recipes">{recipesContent}</div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { recipes: state.recipes };
}

export default connect(
  mapStateToProps,
  { getRecipe }
)(Recipes);

/*


*/
