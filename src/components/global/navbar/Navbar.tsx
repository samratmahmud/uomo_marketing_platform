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
    link: "/",
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
    <nav className={`fixed left-0 right-0 bg-praimary`}>
      <div className="container flex items-center justify-between py-5">
        <div className="flex items-center gap-7">
          <div>
            <img src="/images/logo.png" alt="" />
          </div>
          <div className="flex gap-10">
            {navLink.map(({link, name}, index) => (
              <Link
                href={link}
                key={index}
                onClick={() => setTab(index)}
                className={`text-xs text-white ${
                  tab === index
                    ? "underline decoration-2 underline-offset-2"
                    : ""
                }`}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Button name="Purchase Theme" amount="$15" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
