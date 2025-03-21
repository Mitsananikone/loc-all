import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ConnectGroups({ onClose }) {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  // Carousel settings
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  // Array of image URLs for the carousel
  const carouselImages = [
    "/images/ConnectGroups/connect-group-1.jpg",
    "/images/ConnectGroups/connect-group-2.jpg",
    "/images/ConnectGroups/connect-group-3.jpg",
  ];

  const styles = {
    centerContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      padding: "10px",
      overflow: "hidden",
      maxWidth: "100vw",
      marginTop: "2vh",
    },
    title: {
      fontSize: "1.5rem",
      color: "var(--primary-color)",
      textAlign: "center",
      marginBottom: "20px",
    },
    carouselContainer: {
      width: "100%",
      maxWidth: "800px",
      aspectRatio: "16 / 9",
      marginBottom: "20px",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      position: "relative",
    },
    carouselImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      border: "1px solid var(--primary-color)",
    },
    thumbnailContainer: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "10px",
      marginTop: "10px",
      maxWidth: "100%",
      padding: "0 10px",
    },
    thumbnail: {
      width: "60px",
      height: "60px",
      borderRadius: "5px",
      cursor: "pointer",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "transparent",
      objectFit: "cover",
      opacity: 0.5,
      transition: "opacity 0.3s ease, border-color 0.3s ease",
    },
    activeThumbnail: {
      opacity: 1,
      borderColor: "var(--primary-color)",
    },
    description: {
      fontSize: "1rem",
      lineHeight: "1.6",
      color: "var(--primary-color)",
      textAlign: "left",
      padding: "0 10px",
    },
  };

  // Function to handle thumbnail click
  const handleThumbnailClick = (index) => {
    setCurrentSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div style={styles.centerContainer}>
      {/* Header */}
      <h1 style={styles.title}>
        <i className="fa-solid fa-book-bible" aria-hidden="true"></i> Connect Groups
      </h1>

      {/* Carousel */}
      <div style={styles.carouselContainer}>
        <Slider {...carouselSettings} ref={sliderRef} initialSlide={currentSlide}>
          {carouselImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Connect Groups Image ${index + 1}`}
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
          Our Connect Groups are a vibrant community where members come together
          to grow in faith, build meaningful relationships, and support one
          another. Each week of the month has a unique focus:
        </p>
        <p>
          <br/>
          <u>1st Week:</u> New member introductions, socializing, and
          enjoying a meal together at a local restaurant.
        </p>
        <p>
        <br/>
          <u>2nd Week:</u> Men's Connect Group - A time for men to
          fellowship, share a meal, and participate in workshops on spreading
          the Word of the Lord.
        </p>
        <p>
        <br/>
          <u>3rd Week:</u> Women's Connect Group - A space for women
          to connect, enjoy a meal, and engage in workshops focused on sharing
          their faith.
        </p>
        <p>
        <br/>
          <u>4th Week:</u> Combined Men & Women's Connect Group - A
          joint gathering for all members to socialize, dine together, and
          participate in faith-building workshops.
        </p>
        <p>
          Join us as we grow together in faith and fellowship!
          <br />
          <br />
          Connect Groups meet every week at various locations. For details,
          please fill in the Contact Us form at the bottom of this website.
        </p>
      </div>
    </div>
  );
}

export default ConnectGroups;