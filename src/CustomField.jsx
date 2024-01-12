import React from "react";
import { Field } from "formik";

export default function CustomField({value, name, state, handleFocus, applyPositionStyle, type}) {
  return (
    <div className="flex flex-col items-start justify-start">
      <label
        htmlFor={name}
        className={state ? "" : applyPositionStyle(value)}
      >
        <p className="capitalize">{name}</p>
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        className="flex w-full border rounded-md px-2 pl-3 py-1"
        onFocus={handleFocus}
      />
    </div>
  );
}
