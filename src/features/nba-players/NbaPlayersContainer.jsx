import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { NbaPlayerList, NbaPlayerDetails, NbaPlayerForm } from "../../features";
import {
  getNbaPlayers,
  deleteNbaPlayer,
  toogleLikePlayer,
} from "./../../services/fakeNbaPlayersService";
import { paginate } from "../../common/utils/utils";
import _ from "lodash";

class NbaPlayersContainer extends Component {
  state = {
    nbaPlayers: [],
    currentPage: 1,
    pageSize: 6,
    sortColumn: { path: "lastname", order: "asc" },
    conferences: ["All Teams", "West", "East"],
    selectedConference: { name: "All Teams" },
  };

  componentDidMount() {
    this.setState({
      nbaPlayers: getNbaPlayers(),
    });
  }

  hanldeOnSort = (sortColumn) => {
    this.setState({
      sortColumn,
    });
  };

  hanldeOnFilter = (conference) => {
    const selectedConference = { name: conference };
    this.setState({
      selectedConference,
      currentPage: 1,
      sortColumn: { path: "lastname", order: "asc" },
    });
  };

  hanldeOnDelete = (nbaPlayer) => {
    deleteNbaPlayer(nbaPlayer.id);
    this.setState({
      nbaPlayers: getNbaPlayers(),
    });
  };

  hanldeOnLike = (nbaPlayer) => {
    toogleLikePlayer(nbaPlayer.id);
    this.setState({
      nbaPlayers: getNbaPlayers(),
    });
  };

  hanldeChangePage = (pageNumber) => {
    this.setState({
      currentPage: pageNumber,
    });
  };

  getPageData = () => {
    const {
      currentPage,
      nbaPlayers: allNbaPlayers,
      pageSize,
      selectedConference,
      sortColumn,
    } = this.state;

    const filteredNbaPlayers =
      selectedConference.name === "All Teams"
        ? allNbaPlayers
        : allNbaPlayers.filter(
            (el) => el.franchise.conference === selectedConference.name
          );

    const sortedPlayers = _.orderBy(
      filteredNbaPlayers,
      [sortColumn.path],
      sortColumn.order
    );

    const nbaPlayers = paginate(sortedPlayers, pageSize, currentPage);
    return { totalPlayersCount: filteredNbaPlayers.length, nbaPlayers };
  };

  render() {
    const {
      conferences,
      currentPage,
      pageSize,
      selectedConference,
      sortColumn,
    } = this.state;

    const { nbaPlayers, totalPlayersCount } = this.getPageData();

    return (
      <div>
        <Switch>
          <Route
            path="/nba-players/list"
            exact
            render={(props) => (
              <NbaPlayerList
                nbaPlayers={nbaPlayers}
                currentPage={currentPage}
                pageSize={pageSize}
                conferences={conferences}
                selectedConference={selectedConference}
                sortColumn={sortColumn}
                onSort={this.hanldeOnSort}
                onFilterConference={this.hanldeOnFilter}
                onLikePlayer={this.hanldeOnLike}
                onDeletePlayer={this.hanldeOnDelete}
                onPageChange={this.hanldeChangePage}
                totalPlayersCount={totalPlayersCount}
                {...props}
              />
            )}
          />
          <Route
            path="/nba-players/details/:id"
            exact
            component={NbaPlayerDetails}
          />
          <Route path="/nba-players/edit/:id" exact component={NbaPlayerForm} />
          <Redirect to="/nba-players/list" />
        </Switch>
      </div>
    );
  }
}

export default NbaPlayersContainer;
