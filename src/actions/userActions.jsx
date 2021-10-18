//export const ADD_USER = "ADD_USER";

export const addUser = (user) => {
	console.log("addUser", user);
	//user.id = Math.random().toString();
	return {
		type: "ADD_USER",
		payload: user,
	};
};

export const deleteUser = (userId) => {
	return {
		type: "DELETE_USER",
		payload: userId,
	};
};

export const editUser = (userId, updatedUser) => {
	return {
		type: "EDIT_USER",
		payload: {userId, updatedUser},
	};
};
