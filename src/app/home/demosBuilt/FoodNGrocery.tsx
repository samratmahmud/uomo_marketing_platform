import React from "react";

const DemosFoodProps = [
  {
    title: `Home V12 - Food & Grocery`,
    img: "/images/home-12.png",
  },
];

function FoodNGrocery() {
  return (
    <section>
      <div className="grid grid-cols-3 gap-x-6">
        {DemosFoodProps.map(({title, img}, index) => (
          <div key={index} className="group hover:-translate-y-4 duration-500">
            <div className="mb-4">
              <img src={img} alt="" />
            </div>
            <p className="text-md font-semibold mb-10 group-hover:text-praimary">
              {title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FoodNGrocery;
