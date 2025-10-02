"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuItems from "../../UI/MenuItems";

const Sliderbar = () => {
  const pathName = usePathname();

  return (
    <div className="slider-bar p-5 border-r border-gray-200">
      <Link href="/" className="flex items-center gap-2 px-2 mb-8">
        <span className="bg-blue-600 text-white font-medium text-2xl w-10 h-10 flex items-center justify-center rounded-full shadow-md">
          U
        </span>
        <span className="text-2xl font-bold font-manrope text-gray-900 tracking-wide">
          Ucademy
        </span>
      </Link>

      <ul className="slidebar-link flex flex-col gap-3 mt-6">
        {MenuItems.map((item, index) => {
          const isActive = pathName === item.url;
          return (
            <li key={index}>
              <Link
                href={item.url}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors
          ${isActive ? "sidebar-link-active svg-animation" : "sidebar-link"}
        `}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sliderbar;
