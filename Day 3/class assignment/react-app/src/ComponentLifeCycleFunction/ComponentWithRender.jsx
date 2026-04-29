import React, { useEffect } from "react";

const ComponentWithRender = () => {
    useEffect(()=>{
        console.log("this is useEffect from render");
    })
    console.log("this is normal statement");

    return(
        <div>
            component with render
        </div>
    )
}

export default ComponentWithRender;