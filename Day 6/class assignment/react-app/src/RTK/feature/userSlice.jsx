// import { createSlice } from "@reduxjs/toolkit";

// let userSlice = createSlice({
//     name:"usersSlice",
//     initialState:{users:[]},
//     reducers:{
//         adduser:(state,action)=>{
//             //state.user.push(action.payload)
//             // console.log(action);  
//             console.log(state); 
//             state = {...state,users:[...state.users,action.payload]}
//             return state
//         }
//     },
// })

// export let {adduser} = userSlice.actions
// export default userSlice.reducer
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../API";


// GET USERS
export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        const res = await API.get("/users");
        return res.data;
    }
);

// POST USER
export const addUserAPI = createAsyncThunk(
    "users/addUserAPI",
    async (userData) => {
        const res = await API.post("/users", { name: userData });
        return res.data;
    }
);

// PUT USER (update)
export const updateUserAPI = createAsyncThunk(
    "users/updateUserAPI",
    async ({ id, name }) => {
        const res = await API.put(`/users/${id}`, { id, name });
        return res.data;
    }
);


const userSlice = createSlice({
    name: "usersSlice",
    initialState: {
        users: [],
        loading: false
    },
    reducers: {},

    extraReducers: (builder) => {

        builder
        // GET
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        })

        // POST
        .addCase(addUserAPI.fulfilled, (state, action) => {
            state.users.push(action.payload);
        })

        // PUT
        .addCase(updateUserAPI.fulfilled, (state, action) => {
            const index = state.users.findIndex(u => u.id === action.payload.id);
            state.users[index] = action.payload;
        })
    }
});

export default userSlice.reducer;

//npm i @reduxjs/toolkit