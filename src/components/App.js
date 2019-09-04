import React from "react";
import { connect } from "react-redux";
import AddSchool from "./AddSchool";
import SchoolList from "./SchoolList";

const App = () => (
  <div className="columns">
    <div className="column is-three-fifths">
      <AddSchool />
    </div>
    <div className="column">
      <SchoolList />
    </div>
  </div>
);

export default connect()(App);
