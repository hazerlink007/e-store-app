import React from "react";
import { Link, Outlet } from "react-router-dom";
import KB from '../assets/kingbuy-logo.png'


const Layout = ()=>{
    return(
        <>
        <div>
           

            <div>

                <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">

                    <div className="container">

                    <Link className="navbar-brand" to="/">
        
                        <img className="d-inline-block align-text-top mx-2" src={KB} alt="sk-loogo-150px" width="35"/>

                        KingBuy
        
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                        <span className="navbar-toggler-icon"></span>

                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Men</a>
                            </li>
            
                            <li className="nav-item">
                                <a className="nav-link" href="">Women</a>
                            </li>
            
                            <li className="nav-item">
                                <Link className="nav-link" to="products">Electronics</Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="">Winter</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="">Summer</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="">Sales</a>
                            </li>

                        </ul>

                    </div>

                    </div>

                </nav>

                <div className="row">

                    {/* <h1>Welcome to my store</h1> */}
                    
                </div>

            </div>

        </div>

        <Outlet></Outlet>

        </>
    )
}

export default Layout;