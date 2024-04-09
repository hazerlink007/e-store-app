import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Nopages from "./pages/Nopages";
import Productlayer from "./pages/ProductLayer";
import Productslayer from "./pages/ProductsLayer";



export default function PageRoutes({data,pop}){

    return(
        <BrowserRouter>

                <Routes>

                    <Route path="/" element={<Layout />}>

                        <Route index element={<Home products={pop}/>}/>
                        {/* <Route path="/popular" element={<Popular />}/> */}
                        <Route path="products" element={<Productslayer product={data}/>}/>
                        <Route path="/products/product" element={<Productlayer product={data[1]} />}/>
                        <Route path="*" element={<Nopages />}/>

                    </Route>

                </Routes>

            </BrowserRouter>
    )

}