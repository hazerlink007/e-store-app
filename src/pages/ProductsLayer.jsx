import React from "react"; 
import Card from "../components/Card";
import SelectOne from "../components/SelectOne";
import SelectTwo from "../components/SelectTwo";

const Productslayer = ({product})=>{
    return(

        <div>

            <div className="container mt-3 p-3 w-100">

                <div className="row m-0">

                    <div className=" col-md-4">

                       <div className="sel-con2">

                            <select className="p-prop-sel1 w-100">

                                <option>Choose device</option>
                                <option>Laptops</option>
                                <optio>Phones</optio>
                                <option>Earphones</option>
                                <option>Keyboard</option>

                            </select>

                       </div>

                    </div>

                    <div className=" col-md-4">

                       <div className="sel-con2">

                            <select className="p-prop-sel1 w-100">

                                <option>Choose Memory</option>
                                <option>2GB</option>
                                <optio>4GB</optio>
                                <option>6GB</option>
                                <option>16GB</option>

                            </select>

                       </div>

                    </div>

                    <div className=" col-md-4">

                       <div className="sel-con2">

                            <select className="p-prop-sel1 w-100">

                                <option>Choose Color</option>
                                <option>Black</option>
                                <optio>Blue</optio>
                                <option>Black</option>
                                <option>Dark Grey</option>

                            </select>

                       </div>

                    </div>



                </div>

            </div>

            <div className="prod-display">

                {
                    product.length > 0 ? (
                        product.map((product)=>
                            <Card key={product.name} product={product} />
                        )
                ):(
                    <h2>No products available</h2>
                )
                }

            </div> 

        </div>

       

    )
}

export default Productslayer;