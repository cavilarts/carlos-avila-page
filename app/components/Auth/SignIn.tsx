"use client";

import { Field, Form, Formik } from "formik";

import { SignInSchema } from "@/lib/validation";
import { signIn } from "@/lib/auth";

export default function SignIn() {
  const onSubmit = async (values: { email: string; password: string }) => {
    const response = await signIn(values.email, values.password);

    console.log(response);
  };

  return (
    <div>
      <Formik
        validationSchema={SignInSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" className="border bg-blue-200" />
              {errors.email && touched.email ? (
                <div className="text-violet-500">{errors.email}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field
                name="password"
                type="password"
                className="border bg-blue-200"
              />
              {errors.password && touched.password ? (
                <div className="text-violet-500">{errors.password}</div>
              ) : null}
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
