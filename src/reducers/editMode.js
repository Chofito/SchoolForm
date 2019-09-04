const editMode = (state = "NO_EDIT", action) => {
  switch (action.type) {
    case "SET_EDIT_MODE":
      return action.mode;
    default:
      return state;
  }
};

export default editMode;
