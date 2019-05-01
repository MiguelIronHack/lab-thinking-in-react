import React, { Component } from "react";

export class Search extends Component {
  render() {
    return (
      <section className="search-section">
        <div className="search-bar">
          <label htmlFor="search">Search</label>
          <input
            onChange={this.props.filterproduct}
            id="search"
            className="input"
          />
        </div>
        <div className="checkbox">
          <label htmlFor="onStock">Only show products on stock</label>
          <input id="onStock" type="checkbox" />
        </div>
      </section>
    );
  }
}

export default Search;
