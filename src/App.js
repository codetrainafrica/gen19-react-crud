import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from "./components/UserForm";
import  {Container, Row, Col}from "react-bootstrap";
import UserList from "./components/UserList";
import {connect} from "react-redux"

function App() {
  const [users, setUsers] = useState([]);

  function addUser(user) {
    setUsers([...users, user]);
  }

  //function to edit user
  function editUser(newDetails, userId) {
    //maps through the users array and updates
    //the user with the same user id
    const u = users.map((user) => {
      if (userId === user.id) {
        return newDetails;
      } else {
        return user;
      }
    });

    //updates the users state to contain the edited user
    setUsers(u);
  }

  //funtion to delete a user
  function deleteUser(userId) {
    //loops through the users state and removes the user with the same id
    const filteredUsers = users.filter((user) => {
      return userId !== user.id;
    });

    //sets the users state to the filtered users array
    setUsers(filteredUsers);
  }

  return (
    
    <Container fluid style={{ marginTop:"5 rem"}}>
      <Row>
        <Col md="5">
        <UserForm addUser={addUser} />
        </Col>

        <Col md="5 ">
        <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
    
        </Col>




      </Row>
    </Container>
      


  );
}


export default App;
