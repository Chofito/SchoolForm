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
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                name: action.name,
                students: action.students,
                monthlyFee: action.monthlyFee,
                inscriptionFee: action.inscriptionFee
            };
        default:
            return state;
    }
};
