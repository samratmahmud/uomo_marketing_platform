import React from "react";

const logoGroup = [
  "/images/header1.png",
  "/images/header9.png",
  "/images/header7.png",
  "/images/header3.png",
  "/images/header5.png",
  "/images/header11.png",
  "/images/header9.png",
  "/images/header8.png",
  "/images/header11.png",
  "/images/header1.png",
  "/images/header3.png",
  "/images/header12.png",
];

function HeaderLayout() {
  return (
    <section id="header" className="bg-gray-900 xl:pt-[85px] xl:pb-20 py-10">
      <div className="container">
        <h2 className="xl:text-6xl text-3xl xl:mb-12 mb-7 text-white text-center">
          HEADER <strong>LAYOUTS</strong>
        </h2>
        <div className="grid md:grid-cols-2 xl:gap-7 gap-4">
          {logoGroup.map((logo, index) => (
            <img key={index} className="" src={logo} alt="logo" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeaderLayout;
