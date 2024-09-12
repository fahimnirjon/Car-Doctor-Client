import React from "react";
import img1 from '../assets/images/about_us/person.jpg'
import img2 from '../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="mb-32">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row space-y-5">
          <div className="lg:w-1/2 relative">
          <img
            src={img1}
            className="w-3/4 rounded-lg shadow-2xl"
          />
          <img
            src={img2}
            className="absolute border-white border-8 md:right-5 md:top-1/2 w-1/2 rounded-lg shadow-2xl"
          />
          </div>
          <div className="lg:w-1/2 space-y-4 p-4">
          <p className="text-lg text-orange-600 font-bold">About Us</p>
            <h1 className="text-5xl font-bold">We Are Qualified and of Experienced in this field</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn font-bold text-lg bg-orange-600 text-white">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
