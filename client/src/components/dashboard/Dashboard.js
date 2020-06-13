import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { addList } from "../../apicalls/patches";
import { getUser } from "../../apicalls/gets";
import List from "../lists/List";
class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      name: "",
      time: "",
      checker: true,
      listObj: null
    }
  }



  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  onAddListClick = e => {
    e.preventDefault();
    this.props.addList(this.props.auth.user.id);
  };

  async getList() {
    const {lists} = await this.props.getUser(this.props.auth.user.id).then(result => result.data);
    if (lists.length > 0) {
      const test_elem = lists[0];
      const { items, name, time } = test_elem;
      console.log(items, name, time)
      this.setState({ items });
      this.setState({ name });
      this.setState({ time });
    }
  }

  makeList() {
    this.getList();
    const {items, name, time} = this.state;
    return <List items={items} name={name} time={time} />
  }




  render() {
    const { user } = this.props.auth;

    if(this.state.checker) {
      let checker = false;
      this.setState({checker});
      let listObj = this.makeList();
      this.setState({listObj});
      console.log(listObj);
    }
    
    
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                What are your goals for today?
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                marginRight: "1em"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                marginLeft: "1em"
              }}
              onClick={this.onAddListClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Add List
            </button>

            
    
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  addList: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  List: PropTypes.elementType.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser, addList, getUser, List }
)(Dashboard);