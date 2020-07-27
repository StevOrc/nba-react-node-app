import React, { Component } from 'react';
import { Tbody, Thead, Like } from '../../common'

class NbaList extends Component {

    displayDeleteButton = item => <button
            className="btn btn-danger"
            onClick={() => this.props.onDelete(item)}
        >
            delete
    </button>
 
    columns = [
        {path: 'firstname', label: 'Firstname'},
        {path: 'lastname', label: 'Lastname'},
        {path: 'franchise.name', label: 'Franchise'},
        {path: 'allStar', label: 'All Start', content: item => item.allStar ? <i className='fa fa-star'></i> : <p> - </p> },
        {key: 'liked', label: '', content: item => <Like onLike={this.props.onLike} item={item} isLiked={item.isLiked} />},
        {key: 'deleteAction', label: '', content: item => this.displayDeleteButton(item)},
    ]

    render() {
        const {nbaPlayers, onSort, sortColumn} = this.props;
        return (
            <div>
                <table className="table">
                    <Thead
                        columns={this.columns}
                        onSort={onSort}
                        sortColumn={sortColumn}
                    />
                    <Tbody
                        data={nbaPlayers}
                        columns={this.columns}
                    />
                </table>
            </div>
        );
    }
}
 
export default NbaList;