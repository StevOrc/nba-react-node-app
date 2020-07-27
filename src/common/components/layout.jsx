import React, { Component, Fragment } from 'react'
import { NavBar, ListGroup, Pagination } from '../';
import { NbaList } from '../../features/';
import { getNbaPlayers, toogleLikePlayer, deleteNbaPlayer } from './../../services/fakeNbaPlayersService';
import { paginate } from './../utils/utils';
import _ from 'lodash';

class Layout extends Component {
    state = {
      nbaPlayers: getNbaPlayers(),
      pageSize: 5,
      currentPage: 1,
      selectedConference: {name: 'All Teams'},
      conferences: ['All Teams', 'West', 'East'],
      sortColumn: {path: 'lastname', order: 'asc'}
    }

    hanldeOnDelete = (nbaPlayer) => {
      deleteNbaPlayer(nbaPlayer.id);
      this.setState({nbaPlayers: getNbaPlayers()});
    }

    hanldeOnLike = (nbaPlayer) => {
      toogleLikePlayer(nbaPlayer.id)
      this.setState({nbaPlayer: getNbaPlayers()});
    }

    hanldeOnPageChange = (pageNumber) => {
      this.setState({currentPage: pageNumber});

    }

    handleOnConferenceFilter = (conference) => {
      const selectedConference = {name: conference};
      this.setState({selectedConference, currentPage: 1});

    }

    handleOnSort = (sortColumn) => {
      this.setState({sortColumn})
    }

    render() { 
        const {
          nbaPlayers: allNbaPlayers,
          currentPage,
          pageSize,
          conferences,
          selectedConference,
          sortColumn
        } = this.state;

        const filteredNbaPlayers = selectedConference.name === 'All Teams'
                                  ? allNbaPlayers
                                  : allNbaPlayers.filter( player => player.franchise.conference === selectedConference.name);


        const sorted = _.orderBy(filteredNbaPlayers, [sortColumn.path], sortColumn.order);
        const nbaPlayers = paginate(sorted, currentPage, pageSize);
        const totalCount = filteredNbaPlayers.length;
      
        return (
          <Fragment>
            <NavBar />
            <div className="container mt-4 content-container">
              <div className="row">
                <div className="col-2">
                  <ListGroup
                    items={conferences}
                    selectedItem={selectedConference}
                    onFilterItem={this.handleOnConferenceFilter}
                  /> 
                </div>
                <div className="col">
                  <NbaList
                    nbaPlayers={nbaPlayers}
                    onLike={this.hanldeOnLike}
                    onDelete={this.hanldeOnDelete}
                    onSort={this.handleOnSort}
                    sortColumn={sortColumn}
                  />
                  <div className="mt-4">
                    <Pagination
                      currentPage={currentPage}
                      pageSize={pageSize}
                      totalCount={totalCount}
                      onPageChange={this.hanldeOnPageChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <footer className="footer">
              <div> @nbaReactApp</div>
            </footer>
          </Fragment>
        );
    }
}
 
export default Layout;