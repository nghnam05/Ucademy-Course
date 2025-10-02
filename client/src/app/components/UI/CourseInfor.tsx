import { CourseInfor } from "@/app/types/CourseProps";
import { Star, Clock, Eye } from "lucide-react";
import React from "react";

const CourseInfo: React.FC<CourseInfor> = ({
  rating,
  reviews,
  duration,
  views,
  price,
  oldPrice,
}) => {
  return (
    <div className="w-full">
      {/* Rating */}
      <div className="flex items-center justify-start mb-1">
        <div className="inline-flex items-center gap-2 bg-gray-50 px-2 py-1 rounded-lg">
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="font-semibold text-sm">{rating}</span>
          <span className="text-xs text-gray-400">
            ({reviews.toLocaleString()}người đánh giá)
          </span>
        </div>
      </div>

      {/* Info + Price */}
      <div className="flex items-center justify-between mt-2 mb-4">
        <div className="flex items-center gap-4">
          {/* Duration */}
          <div className="flex items-center gap-1 text-gray-600">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{duration}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1 text-gray-600">
            <Eye className="w-4 h-4" />
            <span className="text-sm">{views.toLocaleString()}</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold font-roboto text-blue-600">
            {price.toLocaleString()}
          </span>
          {oldPrice && (
            <span className="text-gray-400 line-through">
              {oldPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
