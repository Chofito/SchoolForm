import { school } from "./school";

const schools = (state = [], action) => {
    switch (action.type) {
        case "ADD_SCHOOL":
            return [
                ...state,
                school(undefined, action),
            ];
        case "EDIT_SCHOOL":
            return state.map(t => 
                school(t, action)
            );
        case "REMOVE_SCHOOL":
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
}

export default schools;
