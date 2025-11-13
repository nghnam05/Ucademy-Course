import { CourseInfor } from "@/app/types/CourseProps";
import { Star, Clock } from "lucide-react";
import React from "react";

const CourseInfo: React.FC<CourseInfor> = ({
  rating,
  reviews,
  duration,
  price,
  oldPrice,
}) => {
  return (
    <div className="w-full flex flex-col gap-3 mb-2">
      {/* Rating */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-xl shadow-sm">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        </div>
        <div className="">
          <span className="font-semibold text-sm pr-2">{rating}</span>
          <span className="text-xs text-gray-500">
            ({reviews.toLocaleString()} đánh giá)
          </span>
        </div>
      </div>

      {/* Duration + Price */}
      <div className="flex items-center justify-between border-t border-gray-100 pt-3">
        {/* Duration */}
        <div className="flex items-center gap-2 text-gray-600">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{duration}</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold text-blue-600">
            {price.toLocaleString()}₫
          </span>
          {oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              {oldPrice.toLocaleString()}₫
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
