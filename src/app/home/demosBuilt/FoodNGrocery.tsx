import React from "react";
import DemosCardItem from "./DemosCardItem";

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
          <DemosCardItem title={title} img={img} key={index} />
        ))}
      </div>
    </section>
  );
}

export default FoodNGrocery;
