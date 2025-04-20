import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./servicesInfo.module.css";

function ChildCare({ onClose }) {
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
    "/images/Childcare/child-care-1.jpg",
    "/images/Childcare/child-care-2.jpg",
    "/images/Childcare/child-care-3.jpg",
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
        <i className="fa-solid fa-child" aria-hidden="true"></i> Child Care
      </h2>

      {/* Carousel */}
      <div className={styles.carouselContainer}>
        <Slider {...carouselSettings} ref={sliderRef} initialSlide={currentSlide}>
          {carouselImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Child Care Image ${index + 1}`}
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
          Our Child Care services provide a safe, nurturing, and fun environment
          for your little ones while you attend worship services or other church
          activities.
        </p>
        <p>
          <br />
          <u>Infant Care:</u> For babies 6 weeks to 12 months old, we provide
          a warm and loving environment with experienced caregivers.
        </p>
        <p>
          <br />
          <u>Toddler Care:</u> For children 1-3 years old, we offer age-appropriate
          activities and playtime in a safe, stimulating environment.
        </p>
        <p>
          <br />
          <u>Preschool Care:</u> For children 3-5 years old, we provide
          structured activities including Bible stories, crafts, and music.
        </p>
        <p>
          <br />
          <u>Special Needs Care:</u> We have trained staff to care for children
          with special needs, ensuring all children feel welcome and included.
        </p>
        <p>
          <br />
          All our childcare workers are background-checked and trained in child
          safety and first aid. We maintain a secure check-in/check-out system
          for your peace of mind.
        </p>
        <p>
          <br />
          Child Care is available during all regular service times. For more
          information, please fill in the Contact Us form at the bottom of this
          website.
        </p>
      </div>
    </div>
  );
}

export default ChildCare;