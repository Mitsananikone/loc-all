import React from "react";
import { useRouter } from "next/router";
import styles from "./servicesInfo.module.css"; // Import the CSS module

function MusicMinistry() {
  const router = useRouter();

  // Function to handle the back button click
  const handleBackClick = () => {
    router.push("/?scrollTo=services");
  };

  return (
    <div className={styles.centerContainer}>
      {/* Header */}
      <h2 className={styles.title}>
        <i className="fa-solid fa-music" aria-hidden="true"></i> Music Ministry
      </h2>

      {/* Image */}
      <div className={styles.imageContainer}>
        <img
          src="/images/services-musicMinistery.png"
          alt="Music Ministry"
          className={styles.serviceImage}
        />
      </div>

      {/* Description */}
      <div className={styles.description}>
        <p>
          Our Music Ministry is dedicated to leading the congregation in worship
          through music. Whether you're a singer, musician, or simply love to
          worship, there's a place for you here.
        </p>
        <p>
          We believe music is a powerful way to connect with God and express our
          love for Him. Join us as we use our gifts to glorify God and encourage
          others in their faith.
        </p>
      </div>

      {/* Back Button */}
      <button className={styles.backButton} onClick={handleBackClick}>
        BACK
      </button>
    </div>
  );
}

export default MusicMinistry;