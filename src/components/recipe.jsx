import React, { Component } from "react";
import { connect } from "react-redux";

import { FETCH_RECIPE } from "../actions/index";

import uniqid from "uniqid";

export class Recipe extends Component {
  constructor(props) {
    super(props);

    this.createLi = this.createLi.bind(this);
  }

  createLi() {
    const { recipe } = this.props;
    console.log(recipe);

    if (recipe.ingredients) {
      return recipe.ingredients.map(el => {
        console.log(el);

        return (
          <li className="recipe__li" key={uniqid()}>
            <svg className="recipe__icon">
              <use href="img/icons.svg#icon-check" />
            </svg>
            <div className="recipe__ingredient">{el}</div>{" "}
          </li>
        );
      });
    }
  }
  /*
<li class="recipe__item">
        
    </li>

*/

  render() {
    const { recipe } = this.props;

    // console.log(recipe);
    if (recipe.title) {
      return (
        <div className="recipe__part row">
          <figure className="recipe__image">
            <img
              className="recipe__img"
              src={recipe.image_url}
              alt={recipe.title}
            />
          </figure>
          <div className="recipe__detail__papaer">
            <div className="recipe__intro">
              <h2 className="recipe__title">{recipe.title}</h2>
              <div className="recipe__info">
                <span className="recipe__time">60 MINUTES</span>
                <span className="recipe__serveing"> 4 SERVINGS</span>
              </div>
              <div>
                <ul className="recipe__ul">{this.createLi()}</ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return 0;
  }
}

function mapStateToProps(state) {
  return { recipe: state.recipe };
}

export default connect(
  mapStateToProps,
  { FETCH_RECIPE }
)(Recipe);
