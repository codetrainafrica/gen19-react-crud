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
    return {...state.users, action}

};

export default usersReducers;