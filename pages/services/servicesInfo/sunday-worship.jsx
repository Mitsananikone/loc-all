import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <i className="fa-solid fa-users" aria-hidden="true"></i> Sunday Worship
      </h1>

      {/* Carousel */}
      <div style={styles.carouselContainer}>
        <Slider {...carouselSettings} ref={sliderRef} initialSlide={currentSlide}>
          {carouselImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Sunday Worship Image ${index + 1}`}
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