import React, { Component } from "react";
import Row from "./ProductRow";

export class ProductTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((item, i) => (
            <tr key={i}>
              <Row name={item.name} price={item.price} />
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;
