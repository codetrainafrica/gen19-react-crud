import { useState } from "react";
//package to generate unique id
import { v4 as uuid } from "uuid";

const initialState = {
	users: [],
};

const usersReducers = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_USER":
			return { ...state, users: [...state.users, action.payload] };

		case "DELETE_USER":
			const unDeletedUser = state.users.filter((user) => {
				if (user.id !== action.payload) {
					return user;
				}
			});

			return { ...state, users: unDeletedUser };

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
