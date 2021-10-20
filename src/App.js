import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserForm from "./components/UserForm";
import { Container, Row, Col } from "react-bootstrap";
import UserList from "./components/UserList";

function App() {
	const [users, setUsers] = useState([]);

	return (
		<Container fluid style={{ marginTop: "5 rem" }}>
			<Row>
				<Col md="5">
					<UserForm />
				</Col>

				<Col md="5 ">
					<UserList />
				</Col>
			</Row>
		</Container>
	);
}

export default App;
