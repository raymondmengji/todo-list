import React, { Component } from "react";
import './Item.css';


class Item extends Component {

    componentDidMount() {
        var status = localStorage.getItem(this.props._id);
        if(status != null) {
            console.log(this.props.name, status);
            status = (status === 'true');
            this.setState({ status })
        }
    }


    validate() {
        var status = true;
        if(document.getElementById(this.props._id) != null) {
            if(document.getElementById(this.props._id).checked) {
                console.log(this.props._id, "checked")
                status = false;
            }
            else {
                console.log("unchecked")
                status = true;
            }

        }
        else {
            status = true;
        }
        localStorage.setItem(this.props._id, status)
        console.log(status, localStorage.getItem(this.props._id))
        this.setState({ status })
    }

    constructor(props) {
        super(props);
        this.state = {
            status: true
        };

    }
    
    render() {
        console.log("rendering...", this.props.name, this.state.status)
        if(this.state.status) {
            return(
                <>
                    <input id={this.props._id} type="checkbox" name="r" value={this.props._id} onClick={() => this.validate()}/>
                    <label for={this.props._id}>{this.props.name}</label>
                </>
            )
        }
        else {
            return(
                <>
                    <input id={this.props._id} type="checkbox" name="r" value={this.props._id} onClick={() => this.validate()} checked/>
                    <label for={this.props._id}>{this.props.name}</label>
                </>
            )
        }
    }
}

export default Item;