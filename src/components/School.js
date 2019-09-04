import React from "react";

const School = ({ data, remove, onClick }) => {
  console.log(data);
  return (
    <li onClick={onClick} className="list-item">
      {"Nombre: "}
      {data.name}
      {", Estudiantes: "}
      {data.numberOfStudents}
      {", Colegiatura: "}
      {data.monthlyFee}
      {", inscripcion: "}
      {data.inscriptionFee}
      <button onClick={remove} className="button is-danger">
        <i className="material-icons md-24">delete</i>
      </button>
    </li>
  );
};

export default School;
