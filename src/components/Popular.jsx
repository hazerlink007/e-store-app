import React from "react";
import Card from "./Card";


export default function Popular({products}){
    return (
        <div className="prod-display">
            {
                products.length > 0 ? (

                    products.map((product)=>
                        <Card product={product} />
                    )

                ):(
                    <div>
                        <h2>No popular products</h2>
                    </div>
                )

            }
            
        </div>
    )
}