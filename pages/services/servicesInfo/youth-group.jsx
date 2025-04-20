import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./servicesInfo.module.css"; // Import the CSS module

function YouthGroup({ onClose }) {
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
    "/images/YouthGroup/youth-group-1.jpg",
    "/images/YouthGroup/youth-group-2.jpg",
    "/images/YouthGroup/youth-group-3.jpg",
  ];

  // Function to handle the back button click
  const handleBackClick = () => {
    if (onClose) {
      onClose();
    }
    router.push("/?scrollTo=services");
  };

  // Function to handle thumbnail click
  const handleThumbnailClick = (index) => {
    setCurrentSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className={styles.centerContainer}>
      {/* Header */}
      <h2 className={styles.title}>
        <i className="fa-solid fa-users" aria-hidden="true"></i> Youth Group
      </h2>

      {/* Carousel */}
      <div className={styles.carouselContainer}>
        <Slider {...carouselSettings} ref={sliderRef} initialSlide={currentSlide}>
          {carouselImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Youth Group Image ${index + 1}`}
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