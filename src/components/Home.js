import React from "react";
import NavBar from "./NavBar";
import DashBoard from "./DashBoard";
import Covers from "./Covers";
import MyCovers from "./MyCovers";
import Record from "./Record";
import Submit from "./Submit";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { getUserData, getCovers } from "../Actions/Actions";
import "../styles/Covers.css";

class Home extends React.Component {
  state = {
    coverData: {},
  };
  componentDidMount() {
    this.props.getUserData();
    this.props.getCovers();  
  }

  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/home"
            render={() => (
              <DashBoard
                coverData={this.props.user.coverData}
                username={this.props.user.userData.username}
              />
            )}
          />
          <Route path="/home/covers" render={() => (<Covers coverData={this.props.user.coverData} username={this.props.user.userData.username}/>)} />
          <Route path="/home/mycovers" render={() => (<MyCovers coverData={this.props.user.coverData} username={this.props.user.userData.username}/>)} />
          <Route
            path="/home/record"
            render={() => (
              <Record username={this.props.user.userData.username} />
            )}
          />
          <Route
            path="/home/submit"
            render={() => (
              <Submit username={this.props.user.userData.username} />
            )}
          />
        </Switch>
        {/* </div> */}
      </>
    );
  }
}
const mSTP = (state) => ({ user: state });
export default connect(mSTP, { getUserData, getCovers })(Home);
