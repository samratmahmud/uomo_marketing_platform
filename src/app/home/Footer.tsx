import Button from "@/components/common/Button";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <section className="bg-gray-900 pt-[100px] pb-12">
      <div className="container">
        <div className="flex justify-center mb-11">
          <img src="/images/logo.png" alt="" />
        </div>
        <h2 className="text-6xl text-white text-center mb-8 leading-tight">
          PURCHASE THE SOBER NOW AND
        </h2>
        <h3 className="text-6xl text-white text-center font-semibold mb-[60px]">
          MAKE EVERYTHING EASIER
        </h3>
        <Link href="/" className="mb-[60px] flex justify-center">
          <Button Theme="red" name="Purchase Theme" amount="$15" />
        </Link>
        <div className="text-xs text-white text-center">
          Powered By Made with love by Flexkit
        </div>
      </div>
    </section>
  );
}

export default Footer;
