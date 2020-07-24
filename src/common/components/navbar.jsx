import React, {Component} from 'react';

export class Navbar extends Component{

    styleIcon = {
        fontSize: "1.5rem",
        color: "#eee",
        marginRight: "15px",
        cursor: 'pointer'
    }

    render(){
        return (
            <nav className="navbar navbar-light" style={{backgroundColor: '#01579B'}}>
                <div className="navbar-brand d-flex flex-row" style={{color: "white"}}>
                    Navbar
                </div>
                <div>
                    <i className="fa fa-twitter" style={this.styleIcon}></i>
                    <i className="fa fa-facebook-square" style={this.styleIcon}></i>
                    <i className="fa fa-user" style={this.styleIcon}></i>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;