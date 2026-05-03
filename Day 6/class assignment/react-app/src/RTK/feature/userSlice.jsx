import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
    name:"usersSlice",
    initialState:{users:[]},
    reducers:{
        adduser:(state,action)=>{
            //state.user.push(action.payload)
            // console.log(action);  
            console.log(state); 
            state = {...state,users:[...state.users,action.payload]}
            return state
        }
    },
})

export let {adduser} = userSlice.actions
export default userSlice.reducer

//npm i @reduxjs/toolkit