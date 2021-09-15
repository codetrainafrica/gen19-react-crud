import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  function addUser(user) {
    setUsers([...users, user]);
  }

  function editUser(newDetails, userId) {
    const u = users.map((user) => {
      if (userId === user.id) {
        return newDetails;
      } else {
        return user;
      }
    });

    setUsers(u);
  }

  function deleteUser(userId) {
    const filteredUsers = users.filter((user) => {
      return userId !== user.id;
    });

    setUsers(filteredUsers);
  }

  return (
    <div>
      <UserForm addUser={addUser} />
      <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
    </div>
  );
}

export default App;
