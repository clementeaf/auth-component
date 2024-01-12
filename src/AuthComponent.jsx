import React, { useState } from "react";
import { Formik, Form } from "formik";
import { forgotPasswordLinkMessage, initialValues, style } from "../config";
import CustomField from "./CustomField";

export default function AuthComponent() {
  const [fieldsRequired, setFieldsRequired] = useState(null);
  const [activeField, setActiveField] = useState(null);

  const handleFieldFocus = (field) => {
    setActiveField(field);
  };

  const handleResetPosition = (event, values) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      if (!values.user && !values.password) {
        // Assuming these functions are defined somewhere
        setPasswordPosition(false);
        setUserPosition(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-10 gap-4 rounded-md shadow-md bg-white">
      <h1>Welcome!</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values);
          setFieldsRequired("Sending the request...");
        }}
      >
        {({ values }) => (
          <Form
            className="flex flex-col w-full gap-2"
            onBlur={(event) => handleResetPosition(event, values)}
          >
            <CustomField
              value={values.user}
              name="user"
              type="text"
              state={activeField === "user"}
              handleFocus={() => handleFieldFocus("user")}
              applyPositionStyle={() =>
                values.user.length > 0
                  ? style.noPosition
                  : style.initialPosition
              }
            />

            <CustomField
              value={values.password}
              name="password"
              type="password"
              state={activeField === "password"}
              handleFocus={() => handleFieldFocus("password")}
              applyPositionStyle={() =>
                values.password.length > 0
                  ? style.noPosition
                  : style.initialPosition
              }
            />

            <p className="font-light text-black/50 my-4">
              {forgotPasswordLinkMessage}
            </p>

            <button
              type="submit"
              className="bg-black text-white py-1 rounded-md transition duration-300 ease-in-out"
              disabled={fieldsRequired != null}
              onMouseOver={() => {
                if (!values.user || !values.password) {
                  setFieldsRequired("Both fields are required");
                }
              }}
              onMouseOut={() => {
                if (!values.user || !values.password) {
                  setFieldsRequired(null);
                }
              }}
            >
              {fieldsRequired ? fieldsRequired : "Sign in"}
            </button>

            <div className="flex items-center my-3">
              <div className="w-[100px] h-[1px] bg-black/15" />
              <span className="px-[23px] text-sm font-light text-black/50">
                or
              </span>
              <div className="w-[100px] h-[1px] bg-black/15" />
            </div>

            <button type="button" className="text-light text-black/50">
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}