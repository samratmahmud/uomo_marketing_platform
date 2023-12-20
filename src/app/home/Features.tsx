import React from "react";

const featureItems = [
  {
    icon: "/images/f3.png",
    title: "SEO Optimized",
  },
  {
    icon: "/images/f4.png",
    title: "Fully Customizable",
    className: "aspect-square lg:w-20",
  },
  {
    icon: "/images/f5.png",
    title: "Responsive and Retina Ready",
  },
  {
    icon: "/images/f6.png",
    title: "Premium Support & Updates",
  },
];

function Features() {
  return (
    <section className="bg-white">
      <div id="features" className="container py-[85px]">
        <h2 className="text-6xl text-center mb-20">
          CORE <strong>FEATURES</strong>
        </h2>
        <div className="grid grid-cols-4 gap-x-[15px]">
          {featureItems.map(({icon, title, className}, index) => (
            <div key={index} className="flex flex-col items-center">
              <img className={`${className}`} src={icon} alt="" />
              <p className="text-xl font-medium text-center my-7">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
