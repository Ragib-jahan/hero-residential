import { Link } from "react-router-dom";


const SinorLivingCommunitesCard = ({sinorLivingCommunite}) => {
    const {estate_title, description, id, area, price, status, image} = sinorLivingCommunite
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <button className="btn bg-white border-green-600">Status: {status}</button>
                    <p className="text-justify">{description}</p>
                    <div className="lg:flex lg:flex-col  justify-center lg:space-y-3 space-y-3 text-center">
                        <button className="btn bg-white border-green-600 ">Area: {area}</button>
                        <button className="btn bg-white border-green-600 ">Price: {price}</button>
                    </div>
                    <div className="">
                        <Link to={`/SinorLivingCommunites/${id}`}><button className="btn w-full btn-primary">View Property</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinorLivingCommunitesCard;