"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const imagesGroup = [
  "/images/d1.png",
  "/images/d2.png",
  "/images/d3.png",
  "/images/d4.png",
  "/images/d5.png",
  "/images/d6.png",
  "/images/d7.png",
  "/images/d9.png",
  "/images/d3.png",
  "/images/d4.png",
  "/images/d5.png",
  "/images/d6.png",
  "/images/d7.png",
  "/images/d2.png",
  "/images/d4.png",
];

function DetailsPages() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <section id="detail" className="bg-white pt-[85px] pb-[60px]">
      <div className="container">
        <h2 className="text-6xl text-center mb-12">
          DETAILS <strong>PAGES</strong>
        </h2>
        <Slider {...settings}>
          {imagesGroup.map((image, index) => (
            <div key={index} className="px-2.5 py-3 outline-none">
              <img
                className="hover:-translate-y-3 duration-300"
                src={image}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default DetailsPages;
