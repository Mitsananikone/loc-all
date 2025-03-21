import React, { useState, useRef } from "react";
import { useRouter } from "next/router"; // Import useRouter
import Slider from "react-slick"; // Import Slider from react-slick
import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick carousel theme styles

function YouthGroup({ onClose }) {
  const router = useRouter(); // Initialize the router
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide
  const sliderRef = useRef(null); // Ref to access the Slider instance

  // Carousel settings
  const carouselSettings = {
    dots: false, // Hide default dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Auto-play the carousel
    autoplaySpeed: 5000, // Auto-play speed in milliseconds
    beforeChange: (current, next) => setCurrentSlide(next), // Update current slide
  };

  // Array of image URLs for the carousel
  const carouselImages = [
    "/images/YouthGroup/youth-group-1.jpg",
    "/images/YouthGroup/youth-group-2.jpg",
    "/images/YouthGroup/youth-group-3.jpg",
  ];

  const styles = {
    centerContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      padding: "10px",
      overflow: "hidden", // Prevent horizontal scrolling
      maxWidth: "100vw",
      marginTop: "2vh", // Reduced from 8vh to 2vh
    },
    title: {
      fontSize: "1.5rem",
      color: "var(--primary-color)",
      textAlign: "center",
      marginBottom: "20px",
    },
    carouselContainer: {
      width: "100%",
      maxWidth: "800px", // Adjust the max width as needed
      aspectRatio: "16 / 9", // Set aspect ratio (e.g., 16:9 for widescreen)
      marginBottom: "20px",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      position: "relative",
    },
    carouselImage: {
      width: "100%",
      height: "100%", // Ensure the image fills the container height
      objectFit: "cover", // Ensure the image covers the container without distortion
      margin: 0, // Ensure no margin
      padding: 0, // Ensure no padding
      boxSizing: "border-box", // Include padding and border in the element's total width and height
      border: "1px solid var(--primary-color)",
    },
    thumbnailContainer: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap", // Allow thumbnails to wrap to the next line
      gap: "10px",
      marginTop: "10px",
      maxWidth: "100%", // Ensure thumbnails don't overflow
      padding: "0 10px", // Add padding to prevent overflow
    },
    thumbnail: {
      width: "60px", // Default size
      height: "60px", // Default size
      borderRadius: "5px",
      cursor: "pointer",
      borderWidth: "2px", // Use non-shorthand properties
      borderStyle: "solid",
      borderColor: "transparent",
      objectFit: "cover",
      opacity: 0.5,
      transition: "opacity 0.3s ease, border-color 0.3s ease",
    },
    activeThumbnail: {
      opacity: 1,
      borderColor: "var(--primary-color)", // Only update borderColor
    },
    description: {
      fontSize: "1rem",
      lineHeight: "1.6",
      color: "var(--primary-color)",
      textAlign: "left",
      padding: "0 10px", // Reduced padding to bring text closer to the edges
    },
  };

  // Function to handle the back button click
  const handleBackClick = () => {
    // Close the popup
    if (onClose) {
      onClose();
    }
    // Navigate to the services section
    router.push("/?scrollTo=services");
  };

  // Function to handle thumbnail click
  const handleThumbnailClick = (index) => {
    setCurrentSlide(index); // Update the current slide state
    sliderRef.current.slickGoTo(index); // Programmatically go to the selected slide
  };

  return (
    <div style={styles.centerContainer}>
      {/* Header */}
      <h1 style={styles.title}>
        <i className="fa-solid fa-users" aria-hidden="true"></i> Youth Group
      </h1>

      {/* Carousel */}
      <div style={styles.carouselContainer}>
        <Slider {...carouselSettings} ref={sliderRef} initialSlide={currentSlide}>
          {carouselImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Youth Group Image ${index + 1}`}
                style={styles.carouselImage}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Thumbnails */}
      <div style={styles.thumbnailContainer}>
        {carouselImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            style={{
              ...styles.thumbnail,
              ...(index === currentSlide && styles.activeThumbnail),
            }}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>

      {/* Description */}
      <div style={styles.description}>
        <p>
          <br />
          Our Youth Group is a fun, vibrant community where teens from around Alvin ISD can grow in their
          faith, build lasting friendships, and have fun! The first half is social time - everyone catches up with one another, dinner is provided, and our young people love to play organized games.
        </p>
        <p>
          The second half is Bible study, which concentrates on issues important to Christian teens, and there is lots of open discussion.
          <br /><br />Youth Group meets every Sunday 5pm-7pm at:  2451 County Rd 813, Alvin, TX 77511.<br/>
        </p>
      </div>
    </div>
  );
}

export default YouthGroup;