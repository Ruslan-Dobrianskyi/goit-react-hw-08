import { Link, NavLink } from "react-router-dom";
import s from "./NavBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/slice";
import { logoutThunk } from "../../redux/auth/operations";

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={s.navbar}>
      <Link to="/">Phone Book</Link>
      <p>{user.email}</p>
      <ul className={s.list}>
        <li>
          <NavLink className={s.item} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={s.item} to="/contacts">
            Contacts
          </NavLink>
        </li>
        {!isLoggedIn && (
          <>
            <li>
              <NavLink className={s.item} to="/login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className={s.item} to="/register">
                Register
              </NavLink>
            </li>
          </>
        )}

        {isLoggedIn && (
          <button onClick={() => dispatch(logoutThunk())} className={s.button}>
            Logout
          </button>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
