import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import EditUserForm from "./EditUserForm";

function User(props) {
  const user = props.user;
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <h3>{user.email}</h3>
      <Button variant="primary" onClick={() => toggleModal()}>
        Edit
      </Button>
      <Button variant="danger" onClick={() => props.deleteUser(user.id)}>
        Delete
      </Button>

      <Modal show={showModal} onHide={() => toggleModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm
            user={user}
            editUser={props.editUser}
            toggleModal={toggleModal}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => toggleModal()}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default User;
