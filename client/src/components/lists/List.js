import React, { Component } from "react";
import './List.css';

class List extends Component {
    render(){
        const { name, items, time } = this.props;

        const temp = [];
        for (var i = 0; i < items.length; i++) {
            temp.push(<input id={items[i]._id} type="checkbox" name="r" value={items[i]._id} />);
            temp.push(<label for={items[i]._id}>{items[i].name}</label>);
        }

        return(
            <div id="wrapper">
                <h1>{name}</h1>
                <div id="checklist">
                    {temp}
                </div>
                <h2>{time}</h2>
            </div>
            
        );
    }
}

export default List;