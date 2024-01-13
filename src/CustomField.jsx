import React from 'react';
import { Field } from "formik";
import { style } from "../config";

export default function CustomField({
  name,
  type,
  fieldName,
  handleFieldName
}) {

  return (
    <div className="flex w-[300px] flex-col items-start justify-start">
      <label htmlFor={name} className={fieldName == name ? style.noPosition : style.initialPosition}>
        <p className="capitalize">{name}</p>
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        className="flex w-full border rounded-md px-2 pl-3 py-1"
        onClick={handleFieldName}
      />
    </div>
  );
}
