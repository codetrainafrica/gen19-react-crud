import React, { useState } from "react";
import { Col}  from "react-bootstrap";
//package to generate unique id
import { connect } from 'react-redux';
import {addUser} from "../actions/userActions"
import { v4 as uuid } from "uuid";

function UserForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (email && name) {
      let newUser = {
        name: name,
        email: email,
        //adds a unique id to the new user
        id: uuid(),
      };

      props.addUser(newUser);

      setName("");
      setEmail("");
    }
  }

  return (
    <Col md="4" style={{ marginBottom:"1rem"}}>
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>Name</label>
      <br></br>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br></br>
       <label>Email</label>
       
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br></br>
      <input type="submit" />
    </form>
    </Col>
  );
}


const mapDispatchToProps={
   addNewUser:addUser
};

export default connect(null, mapDispatchToProps)(UserForm);
