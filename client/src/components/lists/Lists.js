import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUser } from "../../apicalls/gets";
import List from "./List";
import './Lists.css';


class Lists extends Component {

    constructor(props) {
        super(props)
        this.state = {
             items: [],
             name: "",
             time: "",
             _id: "",
             comp: [],
             checker: true
        }
    }

    
    async getList() {
        const {lists} = await this.props.getUser(this.props.auth.user.id).then(result => result.data);
        if (lists.length > 0) {

            for (var i = 0; i < lists.length; i++) {
                const test_elem = lists[i];
                const {items, name, time, _id } = test_elem;
                this.setState({ items, name, time, _id }, () => {
                    const {items, name, time, _id } = this.state;
                    const temp = <List items={items} name={name} time={time} _id={_id} />
                    const comp = this.state.comp;
                    comp.push(temp);
                    this.setState({ comp })
                });
            }
        }
      }
    
    render() {
        if(this.state.checker) {
            this.getList()
        }
        if (this.state.comp != null) {
            const temp = this.state.comp;
            this.state.checker = false;

            var text = "";

            if(temp.length > 0) {
                text = "My Lists"
            }
            else {
                text = "You don't have any lists 😞, add one!"
            }

            return(
                <div id="outside">
                    <p className="flow-text grey-text text-darken-1">
                        {text}
                    </p>
                    <div id="lists">
                        {temp}
                    </div>
                </div>
                
            )
        }
        return (
            <div>
                
            </div>
        )
    }
}
Lists.propTypes = {
    getUser: PropTypes.func.isRequired,
    List: PropTypes.elementType.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { getUser, List }
  )(Lists);