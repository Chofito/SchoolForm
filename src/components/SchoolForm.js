import React from "react";
import { Field, reduxForm } from "redux-form";

let SchoolForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="label" htmlFor="id">
          School ID
        </label>{" "}
        <Field
          className="input"
          name="id"
          component="input"
          type="text"
          disabled
        />
      </div>
      <div>
        <label className="label" htmlFor="name">
          School Name
        </label>{" "}
        <Field className="input" name="name" component="input" type="text" />
      </div>
      <div>
        <label className="label" htmlFor="numberOfStudents">
          Number of students
        </label>{" "}
        <Field
          className="input"
          name="numberOfStudents"
          component="input"
          type="text"
        />
      </div>
      <div>
        <label className="label" htmlFor="monthlyFee">
          Monthly Fee
        </label>{" "}
        <Field
          className="input"
          name="monthlyFee"
          component="input"
          type="text"
        />
      </div>
      <div>
        <label className="label" htmlFor="inscriptionFee">
          Inscription Fee
        </label>{" "}
        <Field
          className="input"
          name="inscriptionFee"
          component="input"
          type="text"
        />
      </div>
      <button className="button is-primary" type="submit">
        Submit{" "}
      </button>
    </form>
  );
};

SchoolForm = reduxForm({
  form: "schoolForm"
})(SchoolForm);

export default SchoolForm;
