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

    default:
      return state;
  }
};

export default usersReducers;
