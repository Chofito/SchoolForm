import React from "react";
import { connect } from "react-redux";
import { initialize } from "redux-form";
import SchoolForm from "../components/SchoolForm";
import { addNewSchool, editSchool, setEditMode } from "../actions/index";

const AddSchool = ({ editMode, onClick, addSchool }) => {
  return (
    <div>
      <SchoolForm
        onSubmit={e => {
          if (editMode === "NO_EDIT") {
            addSchool(e);
          } else {
            onClick(e);
          }
        }}
      />
    </div>
  );
};

const mapStateToProps = state => ({ editMode: state.editMode });
const mapDispatchToProps = dispatch => ({
  onClick: school => {
    dispatch(editSchool(school));
    dispatch(setEditMode("NO_EDIT"));
  },
  addSchool: data => {
    dispatch(addNewSchool(data));
    dispatch(initialize("schoolForm", {}));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSchool);
