import { useLoaderData, } from "react-router-dom";

import Apartments from "./Apartments";
import SingleFamilyHouses from "./SingleFamilyHouses/SingleFamilyHouses";
import TownHouses from "./TownHouses/TownHouses";
import StudentHousing from "./StudentHousing/StudentHousing";
import SinorLivingCommunites from "./SiniorLivingCommunites/SinorLivingCommunites";
import VacationRentals from "./VacationRentals/VacationRentals";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import Swiper styles
import 'swiper/css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import img1 from '../assets/Black Simple Beautiful Nature Email Header.png';
import img2 from '../assets/Blue Professional Corporate Email Header (1) (1).png';
import img3 from '../assets/Banner 3 (1).png';

const Home = () => {

    useEffect(() => {
        document.title = "Hero residential - Home"
    }, [])

    const segments = useLoaderData();
    console.log(segments)
    return (
        <div>
            <div className="">
                <Swiper
                
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                </Swiper>
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