import v4 from "uuid/v4";

export const setEditMode = mode => ({
  type: "SET_EDIT_MODE",
  mode
});

export const addNewSchool = school => ({
  type: "ADD_SCHOOL",
  id: v4(),
  school
});

export const editSchool = school => ({
  type: "EDIT_SCHOOL",
  school
});

export const removeSchool = index => ({
  type: "REMOVE_SCHOOL",
  index
});
