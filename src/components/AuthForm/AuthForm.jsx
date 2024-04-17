import { Field, Formik, Form } from "formik";
import s from "./AuthForm.module.css";
import { Link } from "react-router-dom";

const AuthForm = ({ title, onSubmit, initialValues, type }) => {
  return (
    <div className={s.container}>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          {type === "register" && (
            <Field
              className={s.input}
              type="text"
              name="name"
              placeholder="Enter your name"
            />
          )}

          <Field
            className={s.input}
            type="text"
            name="email"
            placeholder="Enter your email"
          />
          <Field
            className={s.input}
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <button className={s.button} type="submit">
            {title}
          </button>
          <p className={s.link}>
            Already have an account?
            {type === "register" ? (
              <Link className={s.link} to="/login">
                Login
              </Link>
            ) : (
              <Link className={s.link} to="/register">
                Register
              </Link>
            )}
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default AuthForm;
