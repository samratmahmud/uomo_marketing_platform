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

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <section id="detail" className="bg-white xl:pt-[85px] xl:pb-[60px] py-10">
      <div className="container">
        <h2 className="xl:text-6xl text-3xl text-center xl:mb-12 mb-7">
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
