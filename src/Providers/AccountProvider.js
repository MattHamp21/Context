import React, { useState } from "react";
export const AccountContext = React.createContext();

const defaultUser = { username: "Joe", Level: "silver", birth: "January 21" };

const AccountProvider = (props) => {
  let [user, setUser] = useState(null);
  const login = () => {
    setUser(defaultUser);
  };

  const updateUser = (changeUser) => {
    setUser(changeUser);
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <AccountContext.Provider
      value={{ user: user, updateUser, login, logout, otherValue: "yo" }}
    >
      {props.children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
