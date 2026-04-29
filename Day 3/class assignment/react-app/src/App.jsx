import ComponentCleanUp from "./ComponentLifeCycleFunction/ComponentCleanUp"
import ApiCalling from "./ApiCallingEffect/ApiCalling"
import { useState } from "react";

function App(){
    let[count, setCount] = useState(0);
    console.log("hi there");
    console.log(count);
    
    
    return(
        <div>
            
            {count}
            <button onClick={()=>{
                setCount(count+1)
            }}>increment</button>
            {
                !(count % 5 == 0) && <ComponentCleanUp />
            }
        </div>
    )
}

export default App