// import React from "react";
// import {useDispatch, useSelector} from "react-redux";
// import { adduser } from "./feature/userSlice";

// const ComponentRTK1 = ()=>{

//     let data = useSelector((prev)=>prev)
//     console.log(data);
//     let dispatch = useDispatch()
//     return (
//         <div>
//             <button onClick={()=>{
//                 dispatch(adduser("this is the jaipur"))
//             }}>addUser</button>
//         </div>
//     )
// }

// export default ComponentRTK1;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUserAPI, updateUserAPI } from "./feature/userSlice";

const ComponentRTK1 = () => {

    const { users } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const submitHandler = () => {
        if (editId) {
            dispatch(updateUserAPI({ id: editId, name }));
            setEditId(null);
        } else {
            dispatch(addUserAPI(name));
        }
        setName("");
    };

    return (
        <div style={{padding:"20px"}}>
            <h2>Redux Toolkit CRUD</h2>

            <input 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder="Enter name"
            />

            <button onClick={submitHandler}>
                {editId ? "Update User" : "Add User"}
            </button>

            <hr/>

            {users.map((u)=>(
                <div key={u.id}>
                    {u.name}
                    <button onClick={()=>{
                        setEditId(u.id);
                        setName(u.name);
                    }}>
                        Edit
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ComponentRTK1;