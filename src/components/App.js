import React from 'react';
import { connect } from 'react-redux';
import AddSchool from './AddSchool';
import SchoolList from './SchoolList'

const App = () => {
  return (
    <div className="columns">
      <div className="column is-three-fifths">
        <AddSchool />
      </div>
      <div>
        <SchoolList className="column" />
      </div>
    </div>
  );
}

export default connect()(App);
