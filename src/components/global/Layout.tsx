import React from "react";
import Navbar from "./navbar/Navbar";

interface layoutProps {
  children: React.ReactNode;
}

function Layout(props: layoutProps) {
  const {children} = props;

  return (
    <div className="bg-100 bg-no-repeat bg-cover bg-fixed">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
