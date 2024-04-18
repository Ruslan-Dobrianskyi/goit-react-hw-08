import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/slice";
import { logoutThunk } from "../../redux/auth/operations";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.item, isActive && s.active);
};

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={s.navbar}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      {/* <Link to="/">Phone Book</Link> */}
      <p>{user.email}</p>
      <ul className={s.list}>
        <li>
          <NavLink className={buildLinkClass} to="/contacts">
            Contacts
          </NavLink>
        </li>
        {!isLoggedIn && (
          <>
            <li>
              <NavLink className={buildLinkClass} to="/login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className={buildLinkClass} to="/register">
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
