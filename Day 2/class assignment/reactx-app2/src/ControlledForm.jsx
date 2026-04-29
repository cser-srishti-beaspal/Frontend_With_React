import React,{ useState } from "react";
const ControlledForm = ()=>{
    let [student , setStudent] = useState({name:null,email:null})
    function updateTheState(e){
        setStudent(prev=>({...prev,[e.target.name]:e.target.value}));
    }
    console.log("this is from the controlled Form");

    return(
        <>
        <h1>hi there!!!</h1>
        <form onSubmit={(e)=>{
            e.preventDefault();
            console.log(student);
        }}>
        <div>
            <label htmlFor="a"></label>
            <input type="text" name='userName' onChange={(e)=>{
                updateTheState(e);
            }} id='userName' />
        </div>
        <div>
            <label htmlFor="a"></label>
            <input type="text" name='userEmail' onChange={(e)=>{
                updateTheState(e);
            }} id='userEmail' />
        </div>
        <div>
            <label htmlFor="a"></label>
            <input type="password" onChange={(e)=>{
                updateTheState(e);
            }} name = 'password' id='password'/>
        </div>
        <button>submit the form</button>
        </form>

        <div>
            <h1>{student.userName}</h1>
            <h1>{student.userEmail}</h1>
            <h1>{student.password}</h1>
        </div>
        </>
    )
}

export default ControlledForm;