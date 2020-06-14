import React, { Component } from "react";
import './Item.css';


class Item extends Component {

    validate() {
        if(document.getElementById(this.props._id) != null) {
            console.log(this.props.name, this.state.status);
            if(document.getElementById(this.props._id).checked) {
                console.log(this.props._id, "checked")
                if (this.state.status = true) {
                    console.log("changed")
                    this.setState({status: false})
                }
            }
            else {
                if (this.state.status = false) {
                    this.setState({status: true})
                }
            }
        }
        else {
            this.setState({status: true})
        }
        console.log(this.props.name, this.state.status);
    }

    constructor(props) {
        super(props);
        this.state = {
            status: true
        };

    }
    
    render() {

        if(this.state.status) {
            return(
                <>
                    <input id={this.props._id} type="checkbox" name="r" value={this.props._id} onClick={() => this.validate()}/>
                    <label for={this.props._id}>{this.props.name}</label>
                </>
            )
        }
        else {
            console.log("render already checked box")
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