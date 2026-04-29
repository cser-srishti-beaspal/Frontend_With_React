import ClassBased from "./ClassBased"
import ClassBased2 from "./ClassBased2"
import Demo from "./Demo"
import FunctionBased3 from "./FunctionBased3"
import FunctionBased2 from "./FunctionBased2"
import ConditionalRendering from "./ConditionalRendering"
import ControlledForm from "./ControlledForm"

function App(){
    return(
        <div>

            {/* {(()=>{
                return <h1>this is the IIFE</h1>
            }
            )()} */}
            
            {/* <ClassBased2 />
            {new ClassBased2().render()} */}
            {/* <Demo />
            <FunctionBased2 />
            <FunctionBased3/> */}
            {/* <ConditionalRendering/> */}
            <ControlledForm />
        </div>
    )
}

export default App