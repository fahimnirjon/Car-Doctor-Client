import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-lg font-bold text-orange-500">Price: ${price}</p>
          <div className="card-actions">
            <Link to={`/checkout/${_id}`}>
              <button className="btn btn-primary text-white">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
