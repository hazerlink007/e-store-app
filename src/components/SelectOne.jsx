import React from "react";

const SelectOne = ({product})=>{

    var memory = product.memory;

    return(
        <div className="p-prop1">

            <div className="sel-con">

                <select className="p-prop-sel1">
                    <option>Memory Space </option>

                    {
                        memory.length > 0 ? (

                            memory.map((item)=>

                                <option key={item}>{item}</option>

                            )

                        ):(
                           <option>No options</option>
                        )
                    }


                </select>

            </div>

        </div>
    )
}

export default SelectOne;