import v4 from 'uuid/v4';

export const addNewSchool = (school) => ({
    type: "ADD_SCHOOL",
    id: v4(),
    school
});

export const editSchool = (id) => ({
    type: "EDIT_SCHOOL",
    id
});

export const removeSchool = (index) => ({
    type: "REMOVE_SCHOOL",
    index
});