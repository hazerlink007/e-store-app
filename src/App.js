import React from "react";
import './App.css';
import LeftPic from "./components/LeftPic";
import RightInfo from "./components/RightInfo";
import LImage from "./assets/mImage.png";

const Product = {
    "name": "Macbok Pro MID 2019",
    "sub": "(M2 Processor Chip)",
    "price": "2500",
    "stock": false,
    "tag": "Laptop",
    "image": LImage,
    "memory": ["4GB RAM","8GB RAM","16GB RAM","32GB RAM"],
    "color": ["Dark Grey","Gold","Ash Grey"]
}

const App = () =>{
    return(

        <div className="container-fluid">

            <div className="cont">

                <div className="row r"> 

                   <LeftPic product={Product}/>

                   <RightInfo product={Product}/>

                </div>

                <div className="row r"></div>

            </div>

        </div>

    )
}

export default App