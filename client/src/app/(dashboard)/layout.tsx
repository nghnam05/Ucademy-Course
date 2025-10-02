import React from "react";
import Sliderbar from "../components/layouts/sliderbar/sliderbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="wrapper grid grid-cols-[300px,minmax(0,1fr)] h-screen">
      <Sliderbar></Sliderbar>
      <main className="p-5">{children}</main>
    </div>
  );
};

export default layout;
