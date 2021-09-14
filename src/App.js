import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [users, setUsers] = useState([]);

  function addUser(user) {
    setUsers([...users, user]);
  }

  return (
    <div>
      <UserForm addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
