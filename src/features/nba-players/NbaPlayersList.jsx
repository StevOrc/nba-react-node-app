import React, { Component } from "react";
import { Table, Pagination, ListGroup, Like } from "../../common";

class NbaPlayersList extends Component {
  renderDeleteButton = (item) => {
    return (
      <button
        className="btn btn-danger"
        onClick={() => this.props.onDelete(item)}
      >
        Delete
      </button>
    );
  };

  columns = [
    { path: "lastname", label: "Lastname" },
    { path: "firstname", label: "Firstname" },
    { path: "franchise.name", label: "Franchise" },
    {
      path: "allStar",
      label: "All Star",
      content: (item) =>
        item.allStar ? (
          <i style={{ color: "gold" }} className="fa fa-star"></i>
        ) : (
          <p> - </p>
        ),
    },
    {
      key: "isLiked",
      label: "",
      content: (item) => (
        <Like item={item} isLiked={item.isLiked} onLike={this.props.onLike} />
      ),
    },
    {
      key: "deleteAction",
      label: "",
      content: (item) => this.renderDeleteButton(item),
    },
  ];

  render() {
    const {
      nbaPlayers,
      totlaCount,
      currentPage,
      pageSize,
      sortColumn,
      selectedFilterConference,
      conferences,
      onSort,
      onFilter,
      onPageChange,
    } = this.props;
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-2">
            <ListGroup
              items={conferences}
              selectedItem={selectedFilterConference}
              onFilter={onFilter}
            />
          </div>
          <div className="col-8">
            <Table
              columns={this.columns}
              data={nbaPlayers}
              onSort={onSort}
              sortColumn={sortColumn}
            />
            <Pagination
              currentPage={currentPage}
              pageSize={pageSize}
              totlaCount={totlaCount}
              onPageCgange={onPageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NbaPlayersList;
