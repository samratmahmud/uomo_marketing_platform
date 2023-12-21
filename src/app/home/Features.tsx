import React from "react";

const featureItems = [
  {
    icon: "/images/f3.png",
    title: "SEO Optimized",
  },
  {
    icon: "/images/f4.png",
    title: "Fully Customizable",
    className: "aspect-square xl:w-20",
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
      <div id="features" className="container xl:py-[85px] pt-10 pb-8">
        <h2 className="xl:text-6xl text-3xl text-center xl:mb-20 mb-8">
          CORE <strong>FEATURES</strong>
        </h2>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-x-[15px]">
          {featureItems.map(({icon, title, className}, index) => (
            <div key={index} className="flex flex-col items-center mb-7">
              <img
                className={`max-w-[36px] xl:max-w-none ${className}`}
                src={icon}
                alt=""
              />
              <p className="xl:text-xl text-xs font-medium text-center xl:my-7 my-2.5">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
