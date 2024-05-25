import { useLoaderData, } from "react-router-dom";

import Apartments from "./Apartments";
import SingleFamilyHouses from "./SingleFamilyHouses/SingleFamilyHouses";
import TownHouses from "./TownHouses/TownHouses";
import StudentHousing from "./StudentHousing/StudentHousing";
import SinorLivingCommunites from "./SiniorLivingCommunites/SinorLivingCommunites";
import VacationRentals from "./VacationRentals/VacationRentals";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Home = () => {

    useEffect(() => {
        document.title = "Hero residential - Home"
    }, [])

    const segments = useLoaderData();
    console.log(segments)
    return (
        <div>
            <div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img  src="https://cre.moodysanalytics.com//app/uploads/2024/01/AdobeStock_619590612.jpg" className="w-full md:h-[400px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <SingleFamilyHouses></SingleFamilyHouses>
            <TownHouses></TownHouses>
            <Apartments></Apartments>
            <StudentHousing></StudentHousing>
            <SinorLivingCommunites></SinorLivingCommunites>
            <VacationRentals></VacationRentals>

        </div>
    );
};

export default Home;