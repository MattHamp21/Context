import React, { useContext } from "react";
import { AccountContext } from "../Providers/AccountProvider";
import ToggleCard from "../Components/ToggleCard";

const Home = () => {
  const { user } = useContext(AccountContext);
  return (
    <div>
      <h1>Home is visible</h1>
      {user && <p> Welcome: {user.username}</p>}
      <ToggleCard>
        <p>1</p>
      </ToggleCard>
      <ToggleCard>
        <p>2</p>
      </ToggleCard>
    </div>
  );
};

export default Home;
