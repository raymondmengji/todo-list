import React, { Component } from "react";
import './List.css';

class List extends Component {
    render(){
        const { name, items, time } = this.props;
        console.log(name, items, time)

        const temp = [];
        for (var i = 0; i < items.length; i++) {
            temp.push(<input id={i} type="checkbox" name="r" value={i}></input>);
            temp.push(<label for={i}>{items[i].name}</label>);
        }

        return(
            <div id="checklist">
                {temp}
            </div>
        );
    }
}

export default List;