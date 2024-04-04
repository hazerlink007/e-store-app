import React from "react";

const LeftPic = ({product})=>{

    return(

        <div className="left-s col-sm-6">

            <div className="pic-con mx-auto">

                {/* <div className="pic"></div> */}
                <img src={product.image} alt="" className="pic"></img>

            </div>

        </div>

    )
}

export default LeftPic;