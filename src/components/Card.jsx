import React from "react";
// import { Link,Outlet } from "react-router-dom";
// import { Route,Routes } from "react-router-dom";
// import Productlayer from "../pages/ProductLayer";

const Card = ({product})=>{

    return(

        <>
        <div className="col-sm-12 col-lg-4 px-2 mb-5">

            <div className="card w-100 col-sm-12 col-md-4">
                <img className="card-img-top img-con" src={product.image} alt="Title" />
                <div className="card-body">
                    <h4 className="card-title">{product.name}</h4>
                    <p className="card-text">{product.sub}</p>
                    <button className="btn btn-primary w-100 p-2">Buy Item</button>
                </div>
            </div>

        </div>


        </>
    )
    
}

export default Card;