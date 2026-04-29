import React,{useEffect} from "react";

const ComponentConstructor = () => {
    useEffect(()=>{
        console.log("this is useEf");
    },[])
    return(
        <div>component constructor</div>
    )
}

export default ComponentConstructor;
