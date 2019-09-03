import React from 'react';
import { connect } from 'react-redux';
import School from './School';
import { removeSchool } from '../actions';

const SchoolList = ({ schools, dispatch }) => (
    <ul className="list">
        {schools.map((school, index) =>
            <School
                key={school.id}
                data={school}
                remove={() => dispatch(removeSchool(index))}
            />
        )}
    </ul>
);

const mapStateToProps = state => ({ schools: state.schools })

export default connect(mapStateToProps)(SchoolList);