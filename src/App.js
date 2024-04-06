import React from "react";
import './App.css';
import './Layout.css'
import LeftPic from "./components/LeftPic";
import RightInfo from "./components/RightInfo";
import LImage from "./assets/mImage.png";
import Card from "./components/Card";

const products = [
    {
        "name": "Macbok Pro MID 2019",
        "sub": "(M2 Processor Chip)",
        "price": "2500",
        "stock": false,
        "tag": "Laptop",
        "image": LImage,
        "memory": ["4GB RAM","8GB RAM","16GB RAM","32GB RAM"],
        "color": ["Dark Grey","Gold","Ash Grey"]
    },
    {
        "name": "Macbok Pro Late 2020",
        "sub": "(M3 Processor Chip)",
        "price": "2500",
        "stock": false,
        "tag": "Laptop",
        "image": LImage,
        "memory": ["4GB RAM","8GB RAM","16GB RAM","32GB RAM"],
        "color": ["Dark Grey","Gold","Ash Grey"]
    },
    {
        "name": "Macbok Pro MID 2019",
        "sub": "(M2 Processor Chip)",
        "price": "2500",
        "stock": false,
        "tag": "Laptop",
        "image": LImage,
        "memory": ["4GB RAM","8GB RAM","16GB RAM","32GB RAM"],
        "color": ["Dark Grey","Gold","Ash Grey"]
    },
    {
        "name": "Macbok Pro MID 2019",
        "sub": "(M2 Processor Chip)",
        "price": "2500",
        "stock": false,
        "tag": "Laptop",
        "image": LImage,
        "memory": ["4GB RAM","8GB RAM","16GB RAM","32GB RAM"],
        "color": ["Dark Grey","Gold","Ash Grey"]
    },
    {
        "name": "Macbok Pro MID 2019",
        "sub": "(M2 Processor Chip)",
        "price": "2500",
        "stock": false,
        "tag": "Laptop",
        "image": LImage,
        "memory": ["4GB RAM","8GB RAM","16GB RAM","32GB RAM"],
        "color": ["Dark Grey","Gold","Ash Grey"]
    },
    {
        "name": "Macbok Pro MID 2019",
        "sub": "(M2 Processor Chip)",
        "price": "2500",
        "stock": false,
        "tag": "Laptop",
        "image": LImage,
        "memory": ["4GB RAM","8GB RAM","16GB RAM","32GB RAM"],
        "color": ["Dark Grey","Gold","Ash Grey"]
    }
]

const App = () =>{
    return(

        <div className="container-fluid">

            {/* <div className="cont">

                <div className="row r"> 

                   <LeftPic product={Product}/>

                   <RightInfo product={Product}/>

                </div>

                <div className="row r"></div>

            </div> */}

            <div className="prod-display">

               {
                products.length > 0 ? (
                    products.map((product)=>
                        <Card product={product} />
                    )
                ):(
                    <h2>No products available</h2>
                )
               }
                
            </div>

        </div>

    )
}

export default App