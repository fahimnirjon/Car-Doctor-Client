import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-5 mb-32">
      <div className="text-center">
        <p className="text-lg font-semibold text-orange-500">Services</p>
        <p className="text-5xl font-bold ">Our Service Area</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quos
          soluta quia <br /> incidunt error quo dignissimos illo ex architecto
          cupiditate
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;
