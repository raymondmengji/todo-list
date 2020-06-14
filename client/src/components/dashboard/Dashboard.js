import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { addList } from "../../apicalls/patches";
import Lists from "../lists/Lists";

class Dashboard extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  onAddListClick = e => {
    e.preventDefault();
    this.props.addList(this.props.auth.user.id);
  };

  

  render() {
    const { user } = this.props.auth;
    
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
            <Lists />
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  addList: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  Lists: PropTypes.elementType.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser, addList, Lists }
)(Dashboard);