import React, { Component } from "react";
import Search from "./Search";
import Table from "./ProductTable";
import data from "../data.json";

export class FilterableProductTable extends Component {
  state = {
    product: data.data
  };

  filterproduct = e => {
    const tmp = this.state.product.filter(item => {
      const res = item.name.toLowerCase().match(e.target.value);
      return res && item;
    });
    this.setState({ product: tmp });
  };

  render() {
    return (
      <React.Fragment>
        <Search filterproduct={this.filterproduct} />
        <Table data={this.state.product} />
      </React.Fragment>
    );
  }
}

export default FilterableProductTable;
