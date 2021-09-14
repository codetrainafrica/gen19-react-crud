import React from "react";

function UserList(props) {
  return (
    <div>
      {props.users.map((user) => {
        return (
          <div>
            <h1>{user.name}</h1>
            <h3>{user.email}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default UserList;
