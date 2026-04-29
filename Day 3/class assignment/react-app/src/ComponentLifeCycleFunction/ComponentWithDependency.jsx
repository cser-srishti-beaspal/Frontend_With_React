import React, {useState, useEffect} from "react";
const ComponentWithDependency = () => {
    let [Count2, setCount2] = useState({value:0,name:"Robinhood"})
    useEffect(()=>{
        console.log("useEffect is called from dependencies");
    }, [count2]
    )

    return(
        <div>
            <h2>this is Count 2 {count2.value}</h2>
            <button onClick = {()=>{
                setCount2(prev=>({...prev,
                    value:count2.value+1
                }))
            }}>Increment</button>
            <h2>{count2.name}</h2>
        </div>
    )
}
export default ComponentWithDependency;