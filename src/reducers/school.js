export const school = (state, action) => {
  switch (action.type) {
    case "ADD_SCHOOL":
      return {
        id: action.id,
        name: action.school.name,
        numberOfStudents: action.school.numberOfStudents,
        monthlyFee: action.school.monthlyFee,
        inscriptionFee: action.school.inscriptionFee
      };
    case "EDIT_SCHOOL":
      console.log({ state, action });
      if (state.id !== action.school.id) {
        return state;
      }
      return {
        ...state,
        name: action.school.name,
        numberOfStudents: action.school.numberOfStudents,
        monthlyFee: action.school.monthlyFee,
        inscriptionFee: action.school.inscriptionFee
      };
    default:
      return state;
  }
};
