"use client";

import { Field, Form, Formik } from "formik";

import { SignUpSchema } from "@/lib/validation";
import { signUp } from "@/lib/auth";

export default function SignUp() {
  async function onSubmit(values: {
    email: string;
    password: string;
    confirmPassword: string;
  }) {
    const response = await signUp(values.email, values.password);

    console.log(response);
  }

  return (
    <Formik
      initialValues={{ email: "", password: "", confirmPassword: "" }}
      validationSchema={SignUpSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="email" type="email" className="border bg-blue-200" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <Field
            name="password"
            type="password"
            className="border bg-blue-200"
          />
          {errors.password && touched.password ? (
            <div className="text-violet-500">{errors.password}</div>
          ) : null}
          <Field
            name="confirmPassword"
            type="password"
            className="border bg-blue-200"
          />
          {errors.confirmPassword && touched.confirmPassword ? (
            <div className="text-violet-500">{errors.confirmPassword}</div>
          ) : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
