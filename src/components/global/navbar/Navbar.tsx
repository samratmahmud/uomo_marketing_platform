"use client";
import Button from "@/components/common/Button";
import Link from "next/link";
import React, {useEffect, useRef, useState} from "react";

const navLink = [
  {
    name: "Demos",
    link: "#demos",
  },
  {
    name: "Shop",
    link: "#shop",
  },
  {
    name: "Detail",
    link: "#detail",
  },
  {
    name: "Headers",
    link: "#header",
  },
  {
    name: "Features",
    link: "#features",
  },
];

function Navbar() {
  // const navbar = useRef(null);
  // const [open, setOpen] = useState(false);
  // const toggleOpen = () => setOpen((v) => !v);

  // useEffect(() => {
  //   let color = "rgb(255, 255, 255, 0)";
  //   window.addEventListener("scroll", (event) => {
  //     const scrollValue = window.scrollY / 5;
  //     const rgbValue = 255 - scrollValue < 36 ? 36 : 255 - scrollValue;
  //     const rgbOpacity = scrollValue / 100;
  //     color = `rgba(${rgbValue}, ${rgbValue}, ${rgbValue}, ${rgbOpacity})`;
  //     if (navbar.current?.style) {
  //       navbar.current.style.backgroundColor = color;
  //     }
  //   });
  // }, []);

  const [tab, setTab] = useState(-1);

  return (
    <nav className={`lg:fixed left-0 right-0 lg:bg-praimary z-[1020]`}>
      <div className="container flex items-center justify-center lg:justify-between py-5">
        <div className="flex lg:flex-row flex-col items-center gap-7">
          <Link href="/" className="relative">
            <img src="/images/logo.png" alt="" />
            <hr className="w-6 h-6 rounded-full bg-white absolute top-[7%] right-0.5 hidden lg:block" />
          </Link>
          <div className="flex flex-wrap justify-center lg:justify-start xl:gap-10 gap-x-6 gap-y-3 lg:gap-y-0">
            {navLink.map(({link, name}, index) => (
              <Link
                href={link}
                key={index}
                onClick={() => setTab(index)}
                className={`text-xs text-white uppercase ${
                  tab === index ? "underline underline-offset-2" : ""
                }`}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
        <Link href="/" className="hidden lg:block">
          <Button name="Purchase Theme" amount="$15" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
