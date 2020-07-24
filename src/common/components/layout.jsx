import React, { Component, Fragment } from 'react'
import { NavBar } from '../';
import { NbaList } from '../../features/';
import { getNbaPlayers } from './../../services/fakeNbaPlayersService';


class Layout extends Component {
    state = {
      nbaPlayers: getNbaPlayers() 
    }

    render() { 
      const {nbaPlayers: allNbaPlayers} = this.state;
        return (
          <Fragment>
            <NavBar />
            <div className="container-fluid mt-4 content-container">
              <NbaList nbaPlayers={allNbaPlayers} />
            </div>
            <footer className="footer">
              <div> @nbaReactApp</div>
            </footer>
          </Fragment>
        );
    }
}
 
export default Layout;