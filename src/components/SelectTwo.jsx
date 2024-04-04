import React from "react";

const SelectTwo = ({product})=>{

    var color = product.color;

    return(

        <div className="p-prop2">

            <div className="sel-con">

                <select className="p-prop-sel1">
                    <option>Colors </option>

                    {
                        color.length > 0 ? (

                            color.map((item)=>

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

export default SelectTwo;