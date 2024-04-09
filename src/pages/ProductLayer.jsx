import React from "react";
import RightInfo from "../components/RightInfo";
import LeftPic from "../components/LeftPic";

const Productlayer = ({product})=>{
    return(
        <div className="container pt-3">

            <div className="row r">

                <LeftPic product={product} />
                <RightInfo product={product} />

            </div>
            
        </div>
    )
}

export default Productlayer;