import React from "react";
import SelectOne from "./SelectOne";
import SelectTwo from "./SelectTwo";
import SelectThree from "./SelectThree";
import AddToBagBtn from "./AddToBagBtn";

const RightInfo= ({product})=>{

    return(

        <div className="right-s col-sm-6">

            <div className="comp-con">

                <div className="p-stock">

                    {product.stock === true ? (

                        <p>In stock</p>

                    ):(
                        <p className="danger">Out of Stock</p>
                    )}

                </div>

                <div className="p-title">

                    <h3 className="p-h3">{product.name}</h3>

                    <h4 className="p-h4">{product.sub}</h4>

                </div>

                <div className="p-price">

                    <div className="price p1">$</div>
                    <div className="price p2">{product.price}</div>
                    <div className="price p1">.00</div>

                </div>

                <SelectOne product={product}/>

                <SelectTwo product={product}/>

                <SelectThree />

                <AddToBagBtn />

            </div>

        </div>

    )
}

export default RightInfo;