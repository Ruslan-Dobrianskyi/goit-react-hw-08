import { useDispatch } from "react-redux";
import AuthForm from "../../components/AuthForm/AuthForm";
import { loginThunk } from "../../redux/auth/operations";
import * as yup from "yup";

const LoginPage = () => {
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(7, "Password should be of minimum 6 characters length")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    dispatch(loginThunk(values));
  };
  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <AuthForm
      title="Login"
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    />
  );
};

export default LoginPage;
