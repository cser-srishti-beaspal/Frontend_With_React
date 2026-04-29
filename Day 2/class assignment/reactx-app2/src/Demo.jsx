import { useState } from "react";

function Demo(){
    // return <div>
    //     {console.log(this)}
    //     <h1>this is function based component  </h1>
    // </div>
    let [state, setState] = useState(10)
    // inital vlue , updating function= inintial value
    let a = 20;
    // console.log(state)
    // consoe.log(setState)
    
    return <>
    {a}
    <hr />
    <button onClick={()=>{
        a+=20;
        setState(state+10)
        // console.log(a);
        console.log("===============");
        console.log(state);
        console.log("===============");

        
    }}>Increment</button>
    <h1>
        {state}
    </h1>
    state
    </>

}
export default Demo;