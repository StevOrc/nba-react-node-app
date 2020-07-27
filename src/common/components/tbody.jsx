import React, { Component } from 'react';
import _ from 'lodash';

class Tbody extends Component {

    renderCells = (item, colum) => {
        if(colum.content) return colum.content(item);

        return _.get(item, colum.path);
    }

    createKey = (item, column) => {
        return item._id + (column.path || column.key);
    }
    
    render() {
        const {data, columns} = this.props
        return (
            <tbody>
                {data.map( item => <tr key={item.id} >
                    { columns.map(column => <td key={this.createKey(item, column)}

                        > {this.renderCells(item, column)} </td>) }
                </tr> )}
            </tbody>
        );
    }
}
 
export default Tbody;