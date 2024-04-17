import { useDispatch } from "react-redux";
import AuthForm from "../../components/AuthForm/AuthForm";
import { toast } from "react-toastify";
import { loginThunk } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch(() => toast.error("Email or password error"));
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
    />
  );
};

export default LoginPage;
