import React from "react";

const cardData = [
  {
    title: "Products Filters",
    thumbnail: "/images/filter.png",
    className: "bg-red-100",
  },
  {
    title: "Product Quickview",
    thumbnail: "/images/quickview.png",
    className: "bg-gray-500",
  },
];
const cardDataSmall = [
  {
    title: "Live Search",
    thumbnail: "/images/search.png",
    className: "md:bg-gray-500",
  },
  {
    title: "Shopping Cart",
    thumbnail: "/images/cart.png",
    className: "md:bg-gray-500",
  },
  {
    title: "Mega Menu",
    thumbnail: "/images/menu.png",
    className: "md:bg-gray-500",
  },
];

function MasonaryCard() {
  return (
    <section className="bg-white pt-8 xl:pb-[90px] pb-7">
      <div className="container">
        <div className="grid md:grid-cols-2 md:gap-6 md:mb-6">
          {cardData.map(({title, thumbnail, className}, index) => (
            <div
              key={index}
              className={`xl:pl-[75px] xl:pr-[110px] px-[30px] pb-7 pt-6 py-[90px] ${className}`}
            >
              <h2 className="xl:text-4xl text-base font-semibold xl:mb-10 mb-5 text-center">
                {title}
              </h2>
              <img className="w-full" src={thumbnail} alt="" />
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 justify-center md:gap-6 md:mb-6 bg-gray-300 md:bg-white">
          {cardDataSmall.map(({title, thumbnail, className}, index) => (
            <div
              key={index}
              className={`xl:px-11 xl:py-[60px] p-[30px] ${className}`}
            >
              <h2 className="text-base font-semibold xl:mb-10 mb-5 text-center">
                {title}
              </h2>
              <img src={thumbnail} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MasonaryCard;
