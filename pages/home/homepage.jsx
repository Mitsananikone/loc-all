import React, { useState, useEffect } from "react";
import Parallelogram from "@/components/parallelogram/parallelogram";
import styles from "./homepage.module.css";

// Custom hook to get screen width
function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
      const handleResize = () => setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return screenWidth;
}

function HomePage() {
  const [fadeInImages, setFadeInImages] = useState(false);
  const screenWidth = useScreenWidth();

  useEffect(() => {
    setTimeout(() => setFadeInImages(true), 1000);
  }, []);

  // Dynamic styles that need JavaScript values
  const dynamicStyles = {
    resizedImage: {
      opacity: fadeInImages ? 1 : 0,
    },
    title: {
      fontSize: screenWidth < 768 ? "2rem" : "1.6rem",
    },
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.contentContainer}>
        {/* First Parallelogram - slides in from left */}
        <div className={styles.animateLeft}>
          <Parallelogram
            width={screenWidth < 768 ? "90vw" : "50vw"}
            height={screenWidth < 768 ? "60vh" : "70vh"}
            color="var(--primary-color)"
            top="5vh"
            left="10vw"
            zIndex="1"
            scale="1"
          >
            <div className={styles.parallelogramContent}>
              <h1 className={styles.title} style={dynamicStyles.title}>LIVING</h1>
              <h1 className={styles.title} style={dynamicStyles.title}>OAKS</h1>
              <h1 className={styles.title} style={dynamicStyles.title}>CHURCH</h1>
              <h6>
                <p style={{ color: "white" }}>
                  ...that they may be called oaks of righteousness, the planting of the Lord, that he may be glorified.
                  <br /> - Isaiah 61:3
                </p>
              </h6>
              <div className={styles.separationLine}></div>
              <h4 className={styles.subtitle}>Leading REAL people <br/> with REAL hurts to find REAL hope in Jesus.</h4>
            </div>
          </Parallelogram>
        </div>

        {/* Second Parallelogram - slides in from right */}
        <div className={styles.animateRight}>
          <Parallelogram
            width={screenWidth < 768 ? "40vw" : "30vw"}
            height={screenWidth < 768 ? "45vh" : "50vh"}
            top="12vh"
            left={screenWidth < 768 ? "10vw" : "40vw"}
            backImage="url('/images/LOCoakHomepage.jpg')"
            zIndex="2"
            scale="1.5"
          >
            <div className={styles.parallelogramImage}></div>
          </Parallelogram>
        </div>
      </div>

      <footer className={styles.imageGrid}>
        {["cred_heights", "cred_GCBA", "cred_SBTC", "cred_NAMB"].map((img, index) => (
          <img
            key={index}
            src={`/images/${img}.png`}
            alt={img}
            className={styles.resizedImage}
            style={{...dynamicStyles.resizedImage}}
          />
        ))}
      </footer>
    </div>
  );
}

export default HomePage;