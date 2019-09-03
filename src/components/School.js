import React from 'react';
import { removeSchool } from '../actions';

const School = ({ data, remove }) => {
    console.log(data)
    return (
        <li
            className="list-item"
        >
            {"Nombre: "}
            {data.name}
            {", Estudiantes: "}
            {data.numberOfStudents}
            {", Colegiatura: "}
            {data.monthlyFee}
            {", inscripcion: "}
            {data.inscriptionFee}
            <button
                onClick={remove}
                className="button is-danger"
            >
                <i className="material-icons md-24">delete</i>
            </button>
        </li>
    )
}

export default School;
