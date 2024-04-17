import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactsThunk } from "../../redux/contactsOps";
import { selectLoading } from "../../redux/contactsSlice";
import { useEffect } from "react";

const ContactsPage = () => {
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      <h1 style={{ textAlign: "center", color: "white" }}>Phonebook</h1>
      <ContactForm />
      {loading && <Loader />}
      <SearchBox />
      <ContactList />
    </>
  );
};

export default ContactsPage;
