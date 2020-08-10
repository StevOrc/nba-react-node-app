import React, { Component } from "react";

class TableHeader extends Component {
  raisedSort = (path) => {
    const { ...sortColumn } = this.props.sortColumn;
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    console.log("aaa", sortColumn);
    this.props.onSort(sortColumn);
  };

  renderSortIcon = (column) => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path || column.key) return null;
    if (sortColumn.order === "asc")
      return (
        <i style={{ cursor: "pointer" }} className="fa fa-sort-asc ml-2"></i>
      );
    return (
      <i style={{ cursor: "pointer" }} className="fa fa-sort-desc ml-2"></i>
    );
  };

  renderStylesPointer = (column) => {
    if (column.key) return null;
    return {
      cursor: "pointer",
    };
  };

  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.path || column.key}
              onClick={() => this.raisedSort(column.path)}
              style={this.renderStylesPointer(column)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
