import React from "react";
import Card from "./Card";


export default function Popular({products}){
    return (

        <>
            <h2 className="ps-2">popular</h2>
            <div className="prod-display p-0">

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

        </>
    )
}