import React from "react";
import mImage from './assets/mImage.png'
import './App.css';

const App = () =>{
    return(

        <div className="container-fluid cont">

            <div className="row r">

                <div className="left-s col-sm-6">

                    <div className="pic-con mx-auto">

                        {/* <div className="pic"></div> */}
                        <img src={mImage} alt="" className="pic"></img>

                    </div>

                </div>

                <div className="right-s col-sm-6">

                    <div className="comp-con">

                        <div className="p-stock">

                            In stock

                        </div>

                        <div className="p-title">

                            <h3 className="p-h3">2019 Macbook Pro Mid 2019</h3>

                            <h4 className="p-h4">(M2 Processor Chip)</h4>

                        </div>

                        <div className="p-price">

                            <div className="price p1">$</div>
                            <div className="price p2">1999</div>
                            <div className="price p1">.00</div>

                        </div>

                        <div className="p-prop1">

                            <div className="sel-con">

                                <select className="p-prop-sel1">
                                    <option>Memory Space </option>
                                    <option>4GB RAM</option>
                                    <option>16GB RAM</option>
                                    <option>32GB RAM</option>
                                </select>

                            </div>

                        </div>

                        <div className="p-prop2">

                            <div className="sel-con">

                                <select className="p-prop-sel1">
                                    <option>Colors </option>
                                    <option>Dark Grey</option>
                                    <option>Gold</option>
                                    <option>Grey</option>
                                </select>

                                </div>

                            </div>

                        <div className="p-prop3">

                            <div className="sel-con">

                                <select className="p-prop-sel1">
                                    <option>Qty </option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>

                            </div>

                        </div>

                        <div className="add-bag">

                            <button type="submit" id="addTB" className="addTBag">Add to Bag</button>

                        </div>

                    </div>

                </div>

            </div>

            <div className="row r"></div>

        </div>

    )
}

export default App