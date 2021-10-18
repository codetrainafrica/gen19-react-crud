//import {ADD_USER} from "../actions/userActions"
const initialState = {
	users: [
		{
			name: "Zakyyyyyy",
			email: "zak@email.com",
			id: "84379843.fsdjhj",
		},

		{ name: "Kobi", email: "kobu@email.com", id: "skdlj4839483" },
	],
};

const usersReducers = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_USER":
			return { ...state.users, users: [...state.users, action.payload] };

		case "DELETE_USER":
			const filteredUsers = state.users.filter(
				(user) => user.id !== action.payload
			);
			return { ...state, users: filteredUsers };

		case "EDIT_USER":
			const updatedUsers = state.users.map((user) => {
				if (user.id === action.payload.userId) {
					return action.payload.updatedUser;
				}
				return user;
			});

			return { ...state, users: updatedUsers };

		default:
			return state;
	}
};

export default usersReducers;
