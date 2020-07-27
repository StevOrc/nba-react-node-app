import React, {Component} from 'react';

class ListGroup extends Component {

    // "list-group-item"

    liClassName = (item) => {
        const {selectedItem} = this.props;
        return selectedItem.name === item ? "list-group-item active" : "list-group-item";
    }

    render() {
        const {items, onFilterItem} = this.props;
        return ( 
        <ul className="list-group">
            {items.map( item => <li key={item}
                                    className={this.liClassName(item)}
                                    onClick={() => onFilterItem(item)}
                                    style={{cursor: 'pointer'}}
                                >{item}</li> )}
        </ul>
        );
    }
}
 
export default ListGroup;