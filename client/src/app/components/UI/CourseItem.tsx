import Image from "next/image";
import Link from "next/link";
import React from "react";
import CourseInfo from "./CourseInfor";
import { Course } from "@/app/types/Course";

const CourseItem: React.FC<Course> = ({
  id,
  title,
  image,
  rating,
  reviews,
  duration,
  price,
  oldPrice,
  isNew,
}) => {
  return (
    <div className="course-item bg-white p-2   rounded-2xl border border-gray-100 hover:shadow-lg hover:cursor-pointer transition">
      {/* Hình ảnh khóa học */}
      <Link href={`/course/${id}`} className="block w-full relative">
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          sizes="(min-width: 640px) 400px, 100vw"
          priority
          className="w-full h-[200px] object-cover rounded-xl"
        />
        {isNew && (
          <span className="absolute top-2 right-2 z-10 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500 text-white shadow-md">
            New
          </span>
        )}
      </Link>

      {/* Tên khóa học */}
      <div className="pt-4">
        <h2 className="course-name font-manrope font-bold text-base mb-2 line-clamp-2">
          {title}
        </h2>
      </div>

      {/* Info */}
      <CourseInfo
        rating={rating}
        reviews={reviews}
        duration={duration}
        price={price}
        oldPrice={oldPrice}
      />

      {/* Nút xem chi tiết */}
      <Link href={`/course/${id}`}>
        <div className="p-1 border-[0.5px] border-[#eeeeee] rounded-xl">
          <button className="w-full py-2 rounded-xl bg-blue-400 hover:bg-blue-600 text-white font-medium transition">
            Xem chi tiết
          </button>
        </div>
      </Link>
    </div>
  );
};

export default CourseItem;
