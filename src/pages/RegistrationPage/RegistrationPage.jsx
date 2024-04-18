import { toast } from "react-toastify";
import AuthForm from "../../components/AuthForm/AuthForm";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const RegistrationPage = () => {
  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(7, "Password should be of minimum 6 characters length")
      .required("Password is required"),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    dispatch(registerThunk(values))
      .unwrap()
      .then((date) => {
        toast.success(`Welcome, ${date.user.name}!`);
        navigate("/");
      })
      .catch(() => toast.error("Registration error"));
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  return (
    <AuthForm
      title="Registration"
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      type="register"
    />
  );
};

export default RegistrationPage;
