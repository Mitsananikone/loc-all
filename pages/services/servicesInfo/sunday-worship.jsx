import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./servicesInfo.module.css"; // Import the CSS module

function SundayWorship({ onClose }) {
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
    "/images/SundayWorship/sunday-worship-1.jpg",
    "/images/SundayWorship/sunday-worship-2.jpg",
    "/images/SundayWorship/sunday-worship-3.jpg",
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
        <i className="fa-solid fa-users" aria-hidden="true"></i> Sunday Worship
      </h2>

      {/* Carousel */}
      <div className={styles.carouselContainer}>
        <Slider {...carouselSettings} ref={sliderRef} initialSlide={currentSlide}>
          {carouselImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Sunday Worship Image ${index + 1}`}
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
          Join us for Sunday Worship, a time of spiritual renewal and community
          fellowship. Pastor Cary delivers inspiring sermons that focus on
          repair and rejuvenation of the human soul, deeply rooted in biblical
          teachings. Our services are designed to uplift and inspire, offering
          heartfelt worship, meaningful messages, and a welcoming atmosphere for
          all.
        </p>
        <p>
          <br />
          Whether you're a long-time member or visiting for the first time, we
          invite you to experience the joy of worshiping together. Sunday
          Worship is a time to reconnect with God, find spiritual healing, and
          build lasting connections within our community. Services are held
          every Sunday at 10:00 AM at our sanctuary.
        </p>
        <p>
          <br />
          Here are videos of Pastor Cary's sermons:
          <br />
          <a
            href="https://www.youtube.com/watch?v=rYOZhgkXvWo&t=28s"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sermon Season 1, Ep 1
          </a>
          <br />
          <a
            href="https://www.youtube.com/watch?v=ZwfVT-gJANc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sermon Season 1, Ep 2
          </a>
          <br />
          <a
            href="https://www.youtube.com/watch?v=JDsJE51LM-g"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sermon Season 1, Ep 3
          </a>
        </p>
      </div>
    </div>
  );
}

export default SundayWorship;