import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUser } from "../../apicalls/gets";
import List from "./List";

class Lists extends Component {

    constructor(props) {
        super(props)
        this.state = {
             items: [],
             name: "",
             time: "",
             comp: null,
             checker: true
        }
    }

    
    async getList() {
        const {lists} = await this.props.getUser(this.props.auth.user.id).then(result => result.data);
        if (lists.length > 0) {
          const test_elem = lists[0];
          const { items, name, time } = test_elem;
          this.setState({ items, name, time }, () => {
            const {items, name, time} = this.state;
            const comp = <List items={items} name={name} time={time} />
            this.setState({ comp })
          });

        }
      }
    
    render() {
        if(this.state.checker) {
            this.getList()
        }
        if (this.state.comp != null) {
            const temp = this.state.comp;
            this.state.checker = false;
            return(
                <div id="lists">
                    {temp}
                </div>
            )
        }
        return (
            <div></div>
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