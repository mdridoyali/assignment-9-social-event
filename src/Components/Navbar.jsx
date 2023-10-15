import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  console.log(user?.displayName);
  const logOutUsers = () => {
    logOutUser();
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact us</NavLink>
      </li>
      <li>
        <NavLink to={"/register"}>Register</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-slate-700 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm  dropdown-content bg-slate-700 mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="normal-case text-xl md:text-3xl">CelebrateTogether</a>
      </div>
      <div className="navbar-center  hidden lg:flex">
        <ul className="menu menu-horizontal text-lg px-1">{links}</ul>
      </div>
      <div className="navbar-end ">
        <li className="list-none">
          {user ? (
           <div className="md:flex items-center gap-2 text-right">
           {
            user?.displayName ? <p>{user?.displayName}</p> : <p>{user.email}</p>
           }
             <button onClick={logOutUsers} className="btn    bg-blue-500 border-none btn-sm text-white">
              <Link to={"/login"}>Log Out</Link>
            </button>
           </div>
          ) : (
            <button className="btn bg-blue-500 border-none btn-sm text-white">
              <Link to={"/login"}>Login</Link>
            </button>
          )}
        </li>
      </div>
    </div>
  );
};

export default Navbar;
