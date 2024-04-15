import React from "react";
import KBWelcome from '../assets/kb-welcome.png';
import KBCarou1 from '../assets/kingbuyCarousel2.png';
import KBCarou2 from '../assets/kingbuyCarousel3.png';
import Carousel from "../components/Carousel";
import Popular from "../components/Popular";
import CardCarousel from "../components/CardCarousel";
import Rimg from '../assets/iphone14s.png'

const Carou = [KBWelcome,KBCarou1,KBCarou2];


const Home = ({products})=>{
    return(
  
        <div className="container px-0">

            <div className="row">

                <Carousel images={Carou} />
                
            </div>

            <div className="row pt-3">

                <div>

                    <Popular products={products}/>

                </div>

                <div>

                    <CardCarousel image={Rimg}/>

                </div>

            </div>

        </div>

    )
}

export default Home;