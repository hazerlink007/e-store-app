import React from "react";

const Card = ({product})=>{
    return(

        <div className="carrd">

            <div className="img-con">

                <img className="cimg" src={product.image} alt=""></img>

            </div>

            <div className="Header-con">

                <h3 className="prodh-align">{product.name}</h3>

                <h4 className="prodh-align">{product.sub}</h4>

            </div>

        </div>

    )
}

export default Card;