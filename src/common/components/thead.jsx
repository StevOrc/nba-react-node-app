import React, { Component } from 'react';

class Thead extends Component {

    thStyle = (column) => {
        if(!column.path) return null;
        return {
            cursor: 'pointer'
        }
    }

    raisedOnSort = path => {
        const sortedColumn = {...this.props.sortColumn}
        if(sortedColumn.path === path) sortedColumn.order = (sortedColumn.order === 'asc') ? 'desc' : 'asc';
        else{
            sortedColumn.path = path;
            sortedColumn.order = 'asc';
        }
        console.log(sortedColumn);
        this.props.onSort(sortedColumn);
    }

    renderSortIcon = (column) => {
        const {sortColumn} = this.props;
        if(column.path !== this.props.sortColumn.path || column.key) return null;
        if(sortColumn.order === 'asc') {
            return <i className="fa fa-sort-asc ml-2"></i>
        }
        return <i className="fa fa-sort-desc ml-2"></i>
    }

    render() {
        const {columns} = this.props
        return (
            <thead>
                <tr>
                    {columns.map( column =>
                    <th key={column.path || column.key}
                        style={this.thStyle(column)}
                        onClick={() => column.path ? this.raisedOnSort(column.path) : null}
                    >
                        {column.label}
                        {this.renderSortIcon(column)}
                    </th>)}
                </tr>
            </thead>
        );
    }
}
 
export default Thead;