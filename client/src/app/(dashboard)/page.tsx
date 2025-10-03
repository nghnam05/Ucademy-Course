import React from "react";
import HeadingTypography from "../components/UI/typography";
import CourseItem from "../components/UI/CourseItem";
import { courses } from "@/database/db";

const Page = () => {
  return (
    <div className="px-4">
      <HeadingTypography>Khám phá</HeadingTypography>
      <hr className="mb-1 mt-2 text-[#ccc] shadow-lg" />
      <div className="list-course mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((item) => (
          <CourseItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Page;
