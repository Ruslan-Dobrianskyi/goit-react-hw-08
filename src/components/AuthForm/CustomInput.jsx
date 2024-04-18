import { ErrorMessage, Field } from "formik";
import s from "./CustomInput.module.css";
import { IoIosEyeOff } from "react-icons/io";
import { useState } from "react";
import { IoIosEye } from "react-icons/io";
const CustomInput = ({ name, placeholder, type = "text" }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <label className={s.label}>
      {name}
      <div className={s.inputContainer}>
        <Field
          className={s.input}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          name={name}
          placeholder={placeholder}
        />
        {type === "password" && (
          <button
            className={s.button}
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <IoIosEye className={s.icon} />
            ) : (
              <IoIosEyeOff className={s.icon} />
            )}
          </button>
        )}
      </div>
      <ErrorMessage className={s.error} name={name} component={"p"} />
    </label>
  );
};

export default CustomInput;
<IoIosEyeOff />;
