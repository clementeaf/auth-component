import React, { useState } from "react";
import { Formik, Form } from "formik";
import { forgotPasswordLinkMessage, initialValues } from "../config";
import CustomField from "./CustomField";
import { fetchLoginUser } from "./services/fetchInstaces";

export default function AuthComponent() {
  const [fieldsRequired, setFieldsRequired] = useState(null);
  const [fieldName, setFieldName] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center p-10 gap-4 rounded-md shadow-md bg-white">
      <h1>Welcome!</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          try {
            setFieldsRequired("Sending the request...");
            const response = await fetchLoginUser(values);
            if (response.status === 200) {
              const success = (
                <p className="w-[300px]">Login success. Redirecting</p>
              );
              setFieldsRequired(success);
            }
          } catch (error) {
            console.error("Error during user registration:", error);
            setFieldsRequired("Error during user registration");
          }
        }}
      >
        {({ values }) => (
          <Form
            className="flex flex-col w-full gap-2"
          >
            <CustomField
              name="user"
              type="text"
              fieldName={fieldName}
              handleFieldName={() => setFieldName("user")}
            />

            <CustomField
              name="password"
              type="password"
              fieldName={fieldName}
              handleFieldName={() => setFieldName("password")}
            />

            <p className="font-light text-black/50 my-4">
              {forgotPasswordLinkMessage}
            </p>

            <button
              type="submit"
              className={`py-1 rounded-md transition duration-300 ease-in-out ${
                fieldsRequired == null ? "bg-black text-white" : ""
              }`}
              disabled={!values.password || !values.user}
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

            <div className="flex w-[300px] items-center my-3">
              <div className="w-[150px] h-[1px] bg-black/15" />
              <span className="px-[23px] text-sm font-light text-black/50">
                or
              </span>
              <div className="w-[150px] h-[1px] bg-black/15" />
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
