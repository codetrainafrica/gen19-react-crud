import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserForm from "../components/UserForm";
import { Container, Row, Col } from "react-bootstrap";
import UserList from "../components/UserList";
import { signOut } from "../actions/authActions";
import { connect } from "react-redux";

const Home = (props) => {
	return (
		<div>
			<Container fluid style={{ marginTop: "5 rem" }}>
				<Row>
					<button onClick={() => props.signOut()}>Sign out</button>
					<Col md="5">
						<UserForm />
					</Col>

					<Col>
						<UserList
						// users={users}
						// deleteUser={deleteUser}
						// editUser={editUser}
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

const mapDispatchToProps = {
	signOut,
};

export default connect(null, mapDispatchToProps)(Home);
