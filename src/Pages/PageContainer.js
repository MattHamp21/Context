import React, { useContext } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { AccountContext } from "../Providers/AccountProvider";
import LoginButton from "../Components/LoginButton";

const PageContainer = () => {
  let { user, login, logout } = useContext(AccountContext);

  const renderLogout = () => {
    if (user) {
      return <button onClick={logout}>daf</button>;
    }
    return <LoginButton />;
  };

  return (
    <div>
      <div className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">about</NavLink>
        {user && <NavLink to="/account">Account</NavLink>}
        {user && <NavLink to="/users">Users</NavLink>}
      </div>
      <div>{renderLogout()}</div>
      <div className="page-content">
        <Outlet />
      </div>
    </div>
  );
};

export default PageContainer;
