import React from 'react';
import { connect } from 'react-redux';
import SchoolForm from '../components/SchoolForm'
import { addNewSchool } from '../actions/index';

const AddSchool = ({ dispatch }) => (
    <div>
        <SchoolForm
            onSubmit={e => {
                dispatch(addNewSchool(e))
            }}
        />
    </div>
);
export default connect()(AddSchool);