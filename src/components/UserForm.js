import React, { useState } from "react";
//package to generate unique id
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
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

export default UserForm;
