import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import schools from "./schools";
import editMode from "./editMode";

const schoolApp = combineReducers({
  schools,
  editMode,
  form: formReducer
});

export default schoolApp;
