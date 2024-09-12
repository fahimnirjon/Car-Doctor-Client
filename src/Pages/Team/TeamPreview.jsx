import React from "react";
import img1 from "../../assets/images/team/1.jpg";
import img2 from "../../assets/images/team/2.jpg";
import img3 from "../../assets/images/team/3.jpg";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";

const TeamPreview = () => {
  return (
    <div className="mb-32">
      <div className="text-center mb-5 mt-5">
        <p className="text-lg text-orange-500 font-bold">Team</p>
        <p className="text-5xl font-bold">Meet Our Team</p>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5 gap-4 md:gap-4">
        <div className="card bg-base-100 w-96 shadow-xl ">
          <figure className="px-10 pt-10">
            <img src={img1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl">Car Engine Plug</h2>
            <p className="font-bold">Engine Expert</p>
            <div className="card-actions">
              <SlSocialFacebook className="text-2xl"></SlSocialFacebook>
              <SlSocialInstagram className="text-2xl"></SlSocialInstagram>
              <SlSocialTwitter className="text-2xl"/>
              <SlSocialLinkedin className="text-2xl"/>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl">Car Engine Plug</h2>
            <p className="font-bold">Engine Expert</p>
            <div className="card-actions">
              <SlSocialFacebook className="text-2xl"></SlSocialFacebook>
              <SlSocialInstagram className="text-2xl"></SlSocialInstagram>
              <SlSocialTwitter className="text-2xl"/>
              <SlSocialLinkedin  className="text-2xl"/>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl">Car Engine Plug</h2>
            <p className="font-bold">Engine Expert</p>
            <div className="card-actions ">
              <SlSocialFacebook className="text-2xl"></SlSocialFacebook>
              <SlSocialInstagram className="text-2xl"></SlSocialInstagram>
              <SlSocialTwitter className="text-2xl"/>
              <SlSocialLinkedin className="text-2xl"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPreview;
