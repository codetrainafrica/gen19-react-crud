import React, { useState } from "react";

function UserForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    //prevents the page from refreshing when form is submitted
    e.preventDefault();

    //object with the new user
    let user = {
      name: name,
      email: email,
    };

    //calls the addUser function in App.js
    props.addUser(user);

    //sets name, email state to empty strings
    setName("");
    setEmail("");
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name="fullname"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}
export default UserForm;
