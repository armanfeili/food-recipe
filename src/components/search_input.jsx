import React, { Component } from "react";
import { connect } from "react-redux";
import { getRecipes } from "../actions";

export class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onInputChange(event) {
    // console.log(event.target.value);
    // console.log(event);
    this.setState({
      term: event.target.value
    });
    // maybe it gets error: Cannot read property 'setState' of undefined. it's because we didn't defined this in onChange()
    // because this in onChange get called by a function in a function and refers to window.object
    // so we can use arrow function to fix that or binding this to the function -> this.onInputChange.bind(this)
  }
  onSubmitForm(event) {
    event.preventDefault();
    this.props.getRecipes(this.state.term); // we can access to getRecipes() by this.props -> because of connect()
    this.setState({ term: "" }); // clear the search bar after submitting
  }

  render() {
    return (
      <div>
        <div className="search">
          <h1 className="search__heading">Search for any food here</h1>
          <form onSubmit={this.onSubmitForm}>
            <input
              value={this.state.term}
              onChange={
                // event will pass by default to thease functions "onClick(),onChange(),onScroll()..."
                // and we don't need to pass them by ourselves. so we just write: this.onInputChange without parenthesis.
                this.onInputChange
                // or // event => {this.setState({ term: event.target.value });
              }
              className="search__input"
              type="text"
              placeholder="search for recipes..."
            />
            <button className="search__btn">Search</button>
          </form>
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return { recipes: state.recipes };
// }

export default connect(
  null,
  { getRecipes }
)(SearchInput);
// we passed 'null' instead of mapStateToProps(),
// because we don't wanna show anything of application state, in the search bar.
