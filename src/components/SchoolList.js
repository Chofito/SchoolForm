import React from "react";
import { connect } from "react-redux";
import School from "./School";
import { initialize } from "redux-form";
import { removeSchool, setEditMode } from "../actions";

const SchoolList = ({ schools, dispatch }) => (
  <ul className="list">
    {schools.map((school, index) => (
      <School
        key={school.id}
        data={school}
        onClick={() => {
          dispatch(initialize("schoolForm", school));
          dispatch(setEditMode("EDIT"));
        }}
        remove={() => dispatch(removeSchool(index))}
      />
    ))}
  </ul>
);

const mapStateToProps = state => ({ schools: state.schools });

export default connect(mapStateToProps)(SchoolList);
