import React from "react";
import styles from "./parallelogram.module.css";

const Parallelogram = ({ width, height, color, top, left, children, backImage, zIndex, scale }) => {
  return (
    <div
      className={styles.parallelogram}
      style={{
        width: width || "200px",
        height: height || "100px",
        backgroundColor: color,
        top: top || "0",
        left: left || "0",
        zIndex: zIndex || 1,
        scale: scale,
        overflow: "hidden",
        transformOrigin: "center center",
        // Only apply background styles here if no backImage prop
        ...(!backImage && {
          backgroundImage: "none",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        })
      }}
    >
      {/* Only render background image layer if backImage is provided */}
      {backImage && (
        <div 
          className={styles.backgroundImage}
          style={{
            backgroundImage: backImage,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      )}
      
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Parallelogram;