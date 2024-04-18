import s from "./HomePage.module.css";
import { FaAddressBook } from "react-icons/fa6";
const HomePage = () => {
  return (
    <div className={s.home}>
      Welcome to Phone Book <FaAddressBook />{" "}
    </div>
  );
};

export default HomePage;
