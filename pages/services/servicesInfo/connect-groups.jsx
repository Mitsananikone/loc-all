import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./servicesInfo.module.css"; // Import the CSS module

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

  // Function to handle thumbnail click
  const handleThumbnailClick = (index) => {
    setCurrentSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className={styles.centerContainer}>
      {/* Header */}
      <h2 className={styles.title}>
        <i className="fa-solid fa-book-bible" aria-hidden="true"></i> Connect Groups
      </h2>

      {/* Carousel */}
      <div className={styles.carouselContainer}>
        <Slider {...carouselSettings} ref={sliderRef} initialSlide={currentSlide}>
          {carouselImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Connect Groups Image ${index + 1}`}
                className={styles.carouselImage}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Thumbnails */}
      <div className={styles.thumbnailContainer}>
        {carouselImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`${styles.thumbnail} ${
              index === currentSlide ? styles.activeThumbnail : ""
            }`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>

      {/* Description */}
      <div className={styles.description}>
        <p>
          <br />
          Our Connect Groups are a vibrant community where members come together
          to grow in faith, build meaningful relationships, and support one
          another. Each week of the month has a unique focus:
        </p>
        <p>
          <br />
          <u>1st Week:</u> New member introductions, socializing, and
          enjoying a meal together at a local restaurant.
        </p>
        <p>
          <br />
          <u>2nd Week:</u> Men's Connect Group - A time for men to
          fellowship, share a meal, and participate in workshops on spreading
          the Word of the Lord.
        </p>
        <p>
          <br />
          <u>3rd Week:</u> Women's Connect Group - A space for women
          to connect, enjoy a meal, and engage in workshops focused on sharing
          their faith.
        </p>
        <p>
          <br />
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