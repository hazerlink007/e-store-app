import React from "react";
import './App.css';
import './Layout.css'
import LImage from "./assets/mImage.png";
import Ip14s from './assets/iphone14s.png'
import Iphone from './assets/iphone.png.jpeg'
import AirPod from './assets/airpod.png'
import PageRoutes from "./PageRoutes";

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

const popularProd =[
    {
        "name": "Iphone 14",
        "sub": "Retina display",
        "price": "1200",
        "stock": true,
        "tag": "phone",
        "image": Iphone,
        "memory": ["4GB RAM","8GB RAM","16GB RAM","32GB RAM"],
        "color": ["Dark Grey","Gold","Ash Grey","Black"]
    },
    {
        "name": "Airpods 3",
        "sub": "Apple Atmos",
        "price": "800",
        "stock": true,
        "tag": "earphone",
        "image": AirPod,
        "memory": [],
        "color": ["Blue","White","Black"]
    },
    {
        "name": "Iphone 14 pro",
        "sub": "Retina display",
        "price": "1400",
        "stock": true,
        "tag": "phone",
        "image": Ip14s,
        "memory": ["4GB RAM","8GB RAM","16GB RAM","32GB RAM"],
        "color": ["Dark Grey","Gold","Ash Grey"]
    }
]

const App = () =>{
    return(

        <div>

            {/* <div className="cont">

                <div className="row r"> 

                   <LeftPic product={Product}/>

                   <RightInfo product={Product}/>

                </div>

                <div className="row r"></div>

            </div> */}

            {/* <div className="prod-display">

               {
                products.length > 0 ? (
                    products.map((product)=>
                        <Card product={product} />
                    )
                ):(
                    <h2>No products available</h2>
                )
               }
                
            </div> */}

            <PageRoutes data={products} pop={popularProd}/>


        </div>

    )
}

export default App