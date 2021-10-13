//import React, { useState } from "react";
import User from "./User";
import { connect } from "react-redux";
//import { Modal, Button } from "react-bootstrap";

function UserList(props) {
  return (
    <div>
      {props.users.map((user) => {
        //renders the User component for each user in the users array
        return (
          <User
            user={user}
            key={user.id}
            deleteUser={props.deleteUser}
            editUser={props.editUser}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(UserList);
