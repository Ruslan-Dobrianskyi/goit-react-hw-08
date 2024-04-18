import { Formik, Form } from "formik";
import s from "./AuthForm.module.css";
import { Link } from "react-router-dom";
import CustomInput from "./CustomInput";

const AuthForm = ({
  title,
  onSubmit,
  initialValues,
  type,
  validationSchema,
}) => {
  return (
    <div className={s.container}>
      <Formik
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        initialValues={initialValues}
      >
        <Form className={s.form}>
          {type === "register" && (
            <CustomInput name="name" placeholder="Enter your name" />
          )}
          <CustomInput name="email" placeholder="Enter your email" />
          <CustomInput
            name="password"
            placeholder="Enter your password"
            type="password"
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
