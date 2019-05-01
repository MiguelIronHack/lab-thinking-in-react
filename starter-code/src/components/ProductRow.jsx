import React, { Component } from "react";

export class ProductRow extends Component {
  render() {
    return (
      <React.Fragment>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
      </React.Fragment>
    );
  }
}

export default ProductRow;
