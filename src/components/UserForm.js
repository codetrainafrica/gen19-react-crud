import React, { useState } from "react";

function UserForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    let newUser = {
      name: name,
      email: email,
    };

    props.addUser(newUser);

    setName("");
    setEmail("");
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
