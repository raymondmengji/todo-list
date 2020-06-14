import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import Add from './Add';

import './List.css';

class List extends Component {

    render(){
        const { name, items, time } = this.props;

        const temp = [];
        for (var i = 0; i < items.length; i++) {
            const { _id, name } = items[i];
            if (_id == null || name == null) {
                i -=1
            }
            else {
                temp.push(<Item _id={_id} name={name} />);
            }
        }

        return(
            <div id="wrapper">
                <h1>{name}</h1>
                <div id="checklist">
                    {temp}
                </div>
                <Add listID={this.props._id} />
                <h2>{time}</h2>
            </div>
            
        );
    }
}
List.propTypes = {
    Item: PropTypes.elementType.isRequired,
    Add: PropTypes.elementType.isRequired
}

export default List;