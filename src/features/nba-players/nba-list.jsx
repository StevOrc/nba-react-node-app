import React, { Component } from 'react';
import { Tbody, Thead } from '../../common'

class NbaList extends Component {

    render() {
        const {nbaPlayers} = this.props;
        return (
            <div>
                <table>
                    <Thead />
                    <Tbody />
                </table>
            </div>
        );
    }
}
 
export default NbaList;