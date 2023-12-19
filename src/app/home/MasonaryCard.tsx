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
    className: "bg-gray-500",
  },
  {
    title: "Shopping Cart",
    thumbnail: "/images/cart.png",
    className: "bg-gray-500",
  },
  {
    title: "Mega Menu",
    thumbnail: "/images/menu.png",
    className: "bg-gray-500",
  },
];

function MasonaryCard() {
  return (
    <section className="bg-white pt-8 pb-[90px]">
      <div className="container">
        <div className="grid grid-cols-2 gap-6 mb-6">
          {cardData.map(({title, thumbnail, className}, index) => (
            <div
              key={index}
              className={`pl-[75px] pr-[110px] py-[90px] ${className}`}
            >
              <h2 className="text-4xl font-semibold mb-10 text-center">
                {title}
              </h2>
              <img className="w-full" src={thumbnail} alt="" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-6 mb-6">
          {cardDataSmall.map(({title, thumbnail, className}, index) => (
            <div key={index} className={`px-11 py-[60px] ${className}`}>
              <h2 className="text-base font-semibold mb-10 text-center">
                {title}
              </h2>
              <img className="w-full" src={thumbnail} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MasonaryCard;
