import React from "react";
import { Link, Outlet } from "react-router-dom";

const HomePage =()=>{
    return (
        <>
        <h1>this is the home page</h1>
        <div>
            <Link to='/'>Home Hero</Link>
            <Link to = {'kitchen'}>Kitchen</Link>
            <Link></Link>
        </div>
        <Outlet />
        <h3>this the end of home page</h3>
        </>
    )
}

export default HomePage;