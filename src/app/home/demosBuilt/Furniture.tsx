import React from "react";

const DemosFurnitureProps = [
  {
    title: `Home V9 - Furniture`,
    img: "/images/home-9.png",
  },
];

function Furniture() {
  return (
    <section>
      <div className="grid grid-cols-3 gap-6">
        {DemosFurnitureProps.map(({title, img}, index) => (
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

export default Furniture;
