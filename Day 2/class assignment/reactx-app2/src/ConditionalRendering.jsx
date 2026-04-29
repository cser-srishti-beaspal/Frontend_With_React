import React,{useState} from 'react'

const ConditionalRendering = () => {
    let[flag,setFlag] = useState(true)
    return (
        <>
        <button onClick={()=>{
            setFlag(!flag)
        }}>change the flag</button>
        {
            flag
            ? <div style = {{height:"300px",background:"red",width:"400px"}}></div> 
            : <div style = {{height:"400px", background:"pink",width:"300px"}}></div>
        }
        {flag && <h1>this is true</h1>}
        </>
    )
}
export default ConditionalRendering;