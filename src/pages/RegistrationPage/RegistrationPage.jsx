import { toast } from "react-toastify";
import AuthForm from "../../components/AuthForm/AuthForm";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
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
      type="register"
    />
  );
};

export default RegistrationPage;
