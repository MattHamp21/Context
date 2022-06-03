import { useContext } from "react";
import { AccountContext } from "../Providers/AccountProvider";

const Account = () => {
  const { user } = useContext(AccountContext);
  return (
    <div>
      <h1>Will be visible only when logged in</h1>
      {user && <p>Welcomd: {user.username}</p>}
    </div>
  );
};

export default Account;
