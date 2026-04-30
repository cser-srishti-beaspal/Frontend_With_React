//npm i axios json-server
//to install the axios and the JSON-SERVER son the local project

//npx json-server --watch ./src/backend/db.json --port 3000
//to runthe JSON server on the given port and watch for the changes

//how to create the endpoints for the json server
// {"endpointname":[array for the objects]}

import axios from "axios";
let axiosInstance = axios.create({
    baseURL:"http://localhost:3000/",
    timeout:5000,
    headers:{'Content-Type':'application/json'}
})

export let postProduct = async()=>{
    let res = await axiosInstance.post("/products",
        {name:"jay",friend:"sachin"})
    console.log(res);
    console.log(res.data);
}

export let patchProduct = async(id,data)=>{
    let res = await axiosInstance.patch(`/products/${id}`,data)
    console.log(res);
}

export let getProducts = async()=>{
    let resa = await axiosInstance.get("/products")
    return resa.data;
}