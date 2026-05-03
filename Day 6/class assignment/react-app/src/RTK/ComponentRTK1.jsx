import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { adduser } from "./feature/userSlice";

const ComponentRTK1 = ()=>{

    let data = useSelector((prev)=>prev)
    console.log(data);
    let dispatch = useDispatch()
    return (
        <div>
            <button onClick={()=>{
                dispatch(adduser("this is the jaipur"))
            }}>addUser</button>
        </div>
    )
}

export default ComponentRTK1;