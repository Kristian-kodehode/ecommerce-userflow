import React from "react";
import styles from "./rating.module.css";

const RenderStars = ({ rating }) => {
  const maxStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className={styles.rating}>
      {[...Array(maxStars)].map((_, index) => {
        const starType =
          index < fullStars
            ? "filled-star"
            : index === fullStars && hasHalfStar
            ? "half-filled-star"
            : "empty-star";

        return (
          <span key={index} className={`${styles.star} ${styles[starType]}`}>
            {starType === "filled-star" && <i className="fa-solid fa-star"></i>}
            {starType === "half-filled-star" && (
              <i className="fa-solid fa-star-half-stroke"></i>
            )}
            {starType === "empty-star" && (
              <i className="fa-regular fa-star"></i>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default RenderStars;
