import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    const { items, selectedItem, onFilter } = this.props;
    return (
      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item}
            style={{ cursor: "pointer" }}
            onClick={() => onFilter(item)}
            className={
              item === selectedItem.name
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }
}

export default ListGroup;
