import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik'

const style = {
  initialPosition:
    'translate-y-[30px] translate-x-[10px] text-black/70 ease-in-out duration-500',
  noPosition: 'ease-in-out duration-500',
}

export default function AuthComponent() {
  const [passwordPosition, setPasswordPosition] = useState(false)
  const [userPosition, setUserPosition] = useState(false)
  const [fieldsRequired, setFieldsRequired] = useState(null)

  const handlePasswordFocus = () => {
    setPasswordPosition(true)
    setUserPosition(false)
  }

  const handleUserFocus = () => {
    setUserPosition(true)
    setPasswordPosition(false)
  }

  const handleResetPosition = (event, values) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      if (!values.user && !values.password) {
        setPasswordPosition(false)
        setUserPosition(false)
      }
    }
  }

  const applyPositionStyle = (value) => {
    return value.length > 0 ? style.noPosition : style.initialPosition
  }

  return (
    <div className="flex flex-col items-center justify-center p-10 gap-4 rounded-md shadow-md bg-white">
      <h1>Welcome!</h1>
      <Formik
        initialValues={{
          user: '',
          password: '',
        }}
        onSubmit={async (values, { setSubmitting }) => {
            setFieldsRequired("Sending the request...")
        }}
      >
        {({ values }) => (
          <Form
            className="flex flex-col w-full gap-2"
            onBlur={(event) => handleResetPosition(event, values)}
          >
            <div className="flex flex-col items-start justify-start">
              <label
                htmlFor="user"
                className={userPosition ? '' : applyPositionStyle(values.user)}
              >
                User
              </label>
              <Field
                id="user"
                name="user"
                className="flex w-full border rounded-md px-2 py-1"
                onFocus={handleUserFocus}
              />
            </div>

            <div className="flex flex-col items-start justify-start">
              <label
                htmlFor="password"
                className={
                  passwordPosition ? '' : applyPositionStyle(values.password)
                }
              >
                Password
              </label>
              <Field
                id="password"
                name="password"
                type="password"
                className="flex w-full border rounded-md px-2 py-1"
                onFocus={handlePasswordFocus}
              />
            </div>

            <p className="font-light text-black/50 my-4">
              Forgot your password? Retrieve here
            </p>

            <button
              type="submit"
              className="bg-black text-white py-1 rounded-md transition duration-300 ease-in-out"
              disabled={fieldsRequired != null}
              onMouseOver={() => {
                if (!values.user || !values.password) {
                  setFieldsRequired('Both fields are required')
                }
              }}
              onMouseOut={() => {
                if(!values.user || !values.password) {
                  setFieldsRequired(null) 
                }
              }}
            >
              {fieldsRequired ? fieldsRequired : 'Sign in'}
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
  )
}
