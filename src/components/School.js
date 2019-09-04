import React from "react";

const School = ({ data, remove, onClick }) => {
  return (
    <li className="list-item">
      <div onClick={onClick}>
        {"Nombre: "}
        {data.name}
        {", Estudiantes: "}
        {data.numberOfStudents}
        {", Colegiatura: "}
        {data.monthlyFee}
        {", inscripcion: "}
        {data.inscriptionFee}
      </div>
      <button onClick={remove} className="button is-danger">
        <i className="material-icons md-24">delete</i>
      </button>
    </li>
  );
};

export default School;
