import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useLoaderData, useParams } from "react-router-dom";


const TownHousesDetails = () => {
    const { id } = useParams()
    const townHouses = useLoaderData()
    console.log(townHouses)

    const find = townHouses.find(townHouse => townHouse.id == id)
    console.log(find)
    const { image, estate_title, segment_name, description, status, price, area, location, coordinates } = find

    const position = coordinates

    useEffect(() => {
        document.title = `${estate_title}`
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
           
            <div className="md:flex gap-10 ">
                <img className="md:w-1/2" src={image} alt="" />
                <div className="md:mt-0 mt-5 space-y-5">
                    <h2 className="md:text-3xl text-xl">{estate_title}</h2>
                    <p>{description}</p>
                    <div className="space-x-5 flex justify-center">
                        <button className="btn text-[#23BE0A] font-medium rounded-[30px] bg-[#23BE0A0D]">{segment_name}</button>
                        <button className="btn text-[#23BE0A] font-medium rounded-[30px] bg-[#23BE0A0D]">{status}</button>
                    </div>
                    <div className="space-x-5 flex justify-center">
                        <button className="btn text-[#23BE0A] font-medium rounded-[30px] bg-[#23BE0A0D]">{area}</button>
                        <button className="btn text-[#23BE0A] font-medium rounded-[30px] bg-[#23BE0A0D]">{location}</button>
                    </div>
                    <div className="space-x-5">
                        <button className="btn w-full text-[#23BE0A] font-medium rounded-[30px] bg-[#23BE0A0D]"><span className="text-[#1d4a16]">Price: </span>{price}</button>
                    </div>
                </div>

            </div>
            <div className="mt-10 ">
                <MapContainer className="" center={position} zoom={40} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            {location}
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default TownHousesDetails;