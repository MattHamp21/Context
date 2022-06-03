import { useEffect, useState } from "react";
import ToggleCard from "../Components/ToggleCard";

const User = () => {
  let [users, setUser] = useState([]);
  let [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   getUsers();
  // }, []);

  const renderUsers = () => {
    if (loading) {
      return <p>Loading</p>;
    }
    return users.map((u) => {
      return (
        <div key={u.id}>
          <h1>{u.email}</h1>
          <h1>{u.id}</h1>
        </div>
      );
    });
  };

  return (
    <ToggleCard title="users">
      <h1>Users</h1>
      {renderUsers()}
    </ToggleCard>
  );
};

export default User;
