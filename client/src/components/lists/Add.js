import React, { Component } from "react";
import PropTypes from "prop-types";
import { addToList } from "../../apicalls/patches";
import { connect } from "react-redux";
import './Add.css';

class Add extends Component {

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const newItem = {
            name: this.state.name
        };
        this.props.addToList(this.props.auth.user.id, this.props.listID, newItem);
        window.location.href = "./dashboard";
    };

    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
    }

    render() {
        return(
            <form noValidate onSubmit={this.onSubmit}>
                <input type="text" onChange={this.onChange} id="name"></input>
            </form>
        )
    }
}
Add.propTypes = {
    addToList: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { addToList }
  )(Add);