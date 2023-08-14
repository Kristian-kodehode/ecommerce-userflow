import React from "react";
import styles from "./rating.module.css";

const RenderStars = ({ rating, ratingcount }) => {
  const maxStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className={styles.rating}>
      {[...Array(maxStars)].map((_, index) => {
        let starType = "";

        if (index < fullStars) {
          starType = "filled-star";
        } else if (index === fullStars && hasHalfStar) {
          starType = "half-filled-star";
        } else {
          starType = "empty-star";
        }

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
      ({ratingcount})
    </div>
  );
};

export default RenderStars;
