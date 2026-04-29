import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Service from "../pages/Service";
import Header from "../component/Header";
import Footer from "../component/Footer";
import NavBar from "../component/NavBar";
import HeroComponent from "../pages/HeroComponent";
import Kitchen from "../RoutingInnerChild/kitchen";



const RoutingComponent =()=>{
    return (
        <>
        <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
            <Route path = '/' element = {<HomePage />}>
            <Route index element = {<HeroComponent />}/>
            <Route path='kitchen' element = {<Kitchen />}/>
            </Route>
            <Route path = '/about' element = {<About />} />
            <Route path = '/service' element = {<Service />} />
        
        </Routes>
        <Footer />
        </BrowserRouter>
        </>
    )
}

export default RoutingComponent;