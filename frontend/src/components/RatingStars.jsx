import React from "react";
import { Star, StarHalf } from "lucide-react";

const StarRating = ({ rating = 0, width = "1rem", height = "1rem" }) => {
  const safeRating = Math.max(0, Math.min(rating, 5));
  const fullStars = Math.floor(safeRating);
  const hasHalfStar = safeRating - fullStars >= 0.5;

  const iconStyle = {
    width,
    height,
  };

  return (
    <div className="flex gap-1 items-center text-yellow-400">
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return <Star key={i} fill="currentColor" style={iconStyle} />;
        } else if (i === fullStars && hasHalfStar) {
          return <StarHalf key={i} fill="currentColor" style={iconStyle} />;
        } else {
          return <Star key={i} style={iconStyle} className="text-gray-300" />;
        }
      })}
    </div>
  );
};

export default StarRating;
