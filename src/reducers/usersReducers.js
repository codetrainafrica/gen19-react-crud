
//import { useState } from "react";
//package to generate unique id
import { v4 as uuid } from "uuid";
import {ADD_USER} from "../actions/userActions";


const initialState ={
users:[
    {
        name: "Zakyyyyyy",
        email: "zak@email.com",
        gen: 23,
        id: "84379843.fsdjhj",
      },

      { name: "Kobi",
       email: "kobu@email.com",
        gen: 3,
         id: "skdlj4839483" },

]



};


const usersReducers=(state = initialState, action)=>{

    
   // return {...state.users, action}
   switch (action.type) {
       case ADD_USER:
           
        function UserForm(props) {
            const [name] = this.prpos.addUser("");
            const [email] = this.prpos.addUser("");
                 
        if (email && name) {
            let newUser = {
              name: action.payload.name,
              email: action.payload.email,
              //adds a unique id to the new user
              id: uuid(),
            };
        
       return {...state, users: [...state.users, newUser]};
         }     
           
     }
       default:
           return state;
   }

};

export default usersReducers;