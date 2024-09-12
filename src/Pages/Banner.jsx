import React from "react";
import img1 from "../assets/images/banner/1.jpg";
import img2 from "../assets/images/banner/2.jpg";
import img3 from "../assets/images/banner/3.jpg";
import img4 from "../assets/images/banner/4.jpg";
import img5 from "../assets/images/banner/5.jpg";
import img6 from "../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="mb-32">
      <div className="carousel w-full h-[600px] rounded-2xl">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full" />
          <div className="absolute flex items-center h-full left-0 top-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white w-1/2 space-y-6 pl-12">
              <p className="text-6xl font-bold">Affordable Price For Car Service</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                deleniti repellendus nihil! Cum, dolores fugiat.
              </p>
              <div className="">
                <button className="btn  mr-5">Discover More</button>
                <button className="btn  btn-secondary">
                 Latest Projects
                </button>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 bottom-0 gap-5 flex justify-end -translate-y-1/2 transform">
            <a href="#slide6" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          <div className="absolute flex items-center h-full left-0 top-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white w-1/2 space-y-6 pl-12">
              <p className="text-6xl font-bold">Affordable Price For Car Service</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                deleniti repellendus nihil! Cum, dolores fugiat.
              </p>
              <div className="">
                <button className="btn btn-outline mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">
                 Latest Projects
                </button>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 bottom-0 gap-5 flex justify-end -translate-y-1/2 transform">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          <div className="absolute flex items-center h-full left-0 top-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white w-1/2 space-y-6 pl-12">
              <p className="text-6xl font-bold">Affordable Price For Car Service</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                deleniti repellendus nihil! Cum, dolores fugiat.
              </p>
              <div className="">
                <button className="btn btn-outline mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">
                 Latest Projects
                </button>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 bottom-0 gap-5 flex justify-end -translate-y-1/2 transform">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full" />
          <div className="absolute flex items-center h-full left-0 top-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white w-1/2 space-y-6 pl-12">
              <p className="text-6xl font-bold">Affordable Price For Car Service</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                deleniti repellendus nihil! Cum, dolores fugiat.
              </p>
              <div className="">
                <button className="btn btn-outline mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">
                 Latest Projects
                </button>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 bottom-0 gap-5 flex justify-end -translate-y-1/2 transform">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full" />
          <div className="absolute flex items-center h-full left-0 top-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white w-1/2 space-y-6 pl-12">
              <p className="text-6xl font-bold">Affordable Price For Car Service</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                deleniti repellendus nihil! Cum, dolores fugiat.
              </p>
              <div className="">
                <button className="btn btn-outline mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">
                 Latest Projects
                </button>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 bottom-0 gap-5 flex justify-end -translate-y-1/2 transform">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={img6} className="w-full" />
          <div className="absolute flex items-center h-full left-0 top-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white w-1/2 space-y-6 pl-12">
              <p className="text-6xl font-bold">Affordable Price For Car Service</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                deleniti repellendus nihil! Cum, dolores fugiat.
              </p>
              <div className="">
                <button className="btn btn-outline mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">
                 Latest Projects
                </button>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 bottom-0 gap-5 flex justify-end -translate-y-1/2 transform">
            <a href="#slide5" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
