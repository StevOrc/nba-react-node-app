import React, { Component } from "react";
import { Table, DeleteButton, Like } from "../../common";

class NbaPlayerList extends Component {
  columns = [
    { path: "firstname", label: "Firstname" },
    { path: "lastname", label: "Lastname" },
    { path: "franchise.name", label: "Franchise" },
    {
      path: "allStar",
      label: "All Star",
      content: (item) =>
        item.allStar ? <i className="fa fa-star"></i> : <p> - </p>,
    },
    {
      key: "like",
      label: "",
      content: (item) => (
        <Like
          item={item}
          isLiked={item.isLiked}
          onLike={this.props.onLikePlayer}
        />
      ),
    },
    {
      key: "deleteAction",
      label: "",
      content: (item) => (
        <DeleteButton item={item} onDelete={this.props.onDeletePlayer} />
      ),
    },
  ];
  render() {
    const {
      nbaPlayers,
      currentPage,
      pageSize,
      conferences,
      selectedConference,
      sortColumn,
      onSort,
      onFilterConference,
      onLikePlayer,
      onDeletePlayer,
      onPageChange,
      location,
      match,
      history,
      totalPlayersCount,
    } = this.props;
    return (
      <div className="container-fluid mt-5">
        <Table
          columns={this.columns}
          data={nbaPlayers}
          currentPage={currentPage}
          pageSize={pageSize}
          selectedFilterItem={selectedConference}
          filterItems={conferences}
          totalItemsCount={totalPlayersCount}
          onSort={onSort}
          onFilterItem={onFilterConference}
          sortColumn={sortColumn}
          onLikeItem={onLikePlayer}
          onDeleteItem={onDeletePlayer}
          onPageChange={onPageChange}
          location={location}
          match={match}
          history={history}
        />
      </div>
    );
  }
}

export default NbaPlayerList;
