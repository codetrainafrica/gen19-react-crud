import React, { useState } from "react";
import User from "./User";
import { Modal, Button } from "react-bootstrap";

function UserList(props) {
  return (
    <div>
      {props.users.map((user, index) => {
        return (
          <div>
            <User
              user={user}
              key={user.id}
              deleteUser={props.deleteUser}
              editUser={props.editUser}
            />
          </div>
        );
      })}
    </div>
  );
}

export default UserList;
