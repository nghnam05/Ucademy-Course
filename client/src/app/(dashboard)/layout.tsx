import React from "react";
import Sliderbar from "../components/layouts/sliderbar/sliderbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Sliderbar></Sliderbar>
      <div className="wrapper ml-auto max-w-[calc(100%-300px)] h-screen">
        <main className="p-5">{children}</main>
      </div>
    </div>
  );
};

export default layout;
