import { Formik, Form, Field } from "formik";
import s from "./ContactForm.module.css";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContactThunk } from "../../redux/contacts/operations";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data, options) => {
    dispatch(addContactThunk(data));
    options.resetForm();
  };
  const initialValues = {
    name: "",
    number: "",
  };
  const nameFieldId = useId();
  const numberFieldId = useId();
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <label className={s.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field className={s.input} type="text" name="name" id={nameFieldId} />
        <ErrorMessage className={s.error} name="name" component="span" />

        <label className={s.label} htmlFor={numberFieldId}>
          Number
        </label>
        <Field
          className={s.input}
          type="text"
          name="number"
          id={numberFieldId}
        />
        <ErrorMessage className={s.error} name="number" component="span" />

        <button type="submit" className={s.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
