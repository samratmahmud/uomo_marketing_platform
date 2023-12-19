import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const imagesGroup = [
  "/images/s1.png",
  "/images/s2.png",
  "/images/s3.png",
  "/images/s4.png",
  "/images/s5.png",
  "/images/s6.png",
  "/images/s1.png",
  "/images/s2.png",
  "/images/s3.png",
  "/images/s4.png",
  "/images/s5.png",
  "/images/s6.png",
  "/images/s3.png",
  "/images/s4.png",
  "/images/s2.png",
];

function ShopPages() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <section className="bg-gray-500 pt-[85px] pb-[60px]">
      <div className="container">
        <h2 className="text-6xl text-center mb-12">
          SHOP <strong>PAGES</strong>
        </h2>
        <Slider {...settings}>
          {imagesGroup.map((image, index) => (
            <div key={index}>
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

export default ShopPages;
