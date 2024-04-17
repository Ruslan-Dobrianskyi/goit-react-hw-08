import { Link } from "react-router-dom";
import s from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={s.NotFound}>
      <h1>Page not found</h1>
      <Link className={s.link} to="/">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
