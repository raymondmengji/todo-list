import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Item from "./Item";
import Add from './Add';
import { changeListName } from "../../apicalls/patches";


import './List.css';

class List extends Component {

    // onSubmit = e => {
    //     e.preventDefault();
    //     let temp = {
    //         name: this.state.name
    //     };
    //     this.props.changeListName(this.props.auth.user.id, this.props._id, temp)
    // };

    onChange = e => {
        let temp = {
            name: e.target.value
        }
        this.props.changeListName(this.props.auth.user.id, this.props._id, temp)
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         inputname: this.props.name
    //     };
    // }

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
                <input type="text" onChange={this.onChange} placeholder={name} class="h1placeholder"></input>
                <div id="checklist">
                    {temp}
                </div>
                <Add listID={this.props._id} />
                <h2>Date created: {time}</h2>
            </div>
            
        );
    }
}
List.propTypes = {
    Item: PropTypes.elementType.isRequired,
    Add: PropTypes.elementType.isRequired,
    changeListName: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { changeListName }
  )(List);

