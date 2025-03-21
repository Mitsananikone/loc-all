import React from "react";
import styles from "./location.module.css"; // Import the CSS module

function Location() {
  return (
    <div className={styles.centerContainer}>
      <div>
        {/* Header */}
        <h1 className={styles.title}>
          <i className="fa-solid fa-map-marker-alt" aria-hidden="true"></i> Location
        </h1>

        {/* Location Image */}
        <div className={styles.imageContainer}>
          <img
            src="/images/location-main.png" // Replace with your image path
            alt="Alvin Community College"
            className={styles.locationImage}
          />
        </div>

        {/* Description */}
        <div className={styles.description}>
          <p>
            <b>Alvin, Texas</b> is a vibrant and growing community located in the heart of Brazoria County. Known for its rich history, friendly residents, and strong sense of community, Alvin is a wonderful place to live, work, and worship.
          </p>
          <p>
            <b>Alvin Community College (ACC)</b> is a cornerstone of the community, offering excellent educational opportunities and serving as a hub for local events and activities. The college is committed to fostering growth and development, making it an ideal location for community gatherings.
          </p>
          <p>
            Hosting church services at ACC's conference room provides a welcoming and accessible space for worship. The modern facilities and central location make it easy for everyone to join us, whether you're a long-time resident or new to the area.
          </p>
          <br />
          <p>
            <b>
              <i> Living Oaks Church is located at Alvin Community College Building C, Floor 2</i>
            </b>
          </p>
        </div>

        {/* Map and Video Container */}
        <div className={styles.mapAndVideoContainer}>
          {/* Google Maps Embed */}
          <div className={styles.mapContainer}>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.356016216234!2d-95.247297!3d29.4302305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640986ff8e5e91b%3A0x95385cde2f2b1ed5!2s3110%20Mustang%20Rd%2C%20Alvin%2C%20TX%2077511!5e0!3m2!1sen!2sus!4v1684783267394!5m2!1sen!2sus"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Video Embed */}
          <div className={styles.videoContainer}>
            <video controls className={styles.video}>
              <source src="/images/loc-location.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;