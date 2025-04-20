import React from "react";

const NewBanner = () => {
  const styles = {
    banner: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "80px", // Width of the band
      height: "25px", // Height of the band (reduced for a slim look)
      backgroundColor: "red",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontSize: "0.9rem",
      fontWeight: "bold",
      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
      zIndex: 1, // Ensure it appears above the image
      borderBottomRightRadius: "5px", // Optional: Add rounded corners for a polished look
    },
  };

  return <div style={styles.banner}>NEW</div>;
};

export default NewBanner;