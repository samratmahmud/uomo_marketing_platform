import React from "react";

const DemosAllProps = [
  {
    title: `Home V11 - Electronics`,
    img: "/images/home-11.png",
  },
];

function Electronics() {
  return (
    <section>
      <div className="grid grid-cols-3 gap-6">
        {DemosAllProps.map(({title, img}, index) => (
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

export default Electronics;
