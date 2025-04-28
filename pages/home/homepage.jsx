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
    fontSize: screenWidth < 480 ? "2rem" :  // Extra small devices
             screenWidth < 768 ? "1.7rem" :     // Small devices
             screenWidth < 1024 ? "1.6rem" : // Medium devices
             "2rem",                       // Large devices (1024px and up)
    lineHeight: screenWidth < 480 ? "1.2" :  // Responsive line height
               screenWidth < 768 ? "1.3" :
               "1.4",
    padding: screenWidth < 480 ? "0.5rem" :  // Responsive padding
             screenWidth < 768 ? "0.8rem" :
             "1rem"
  },
  subtitle: {
    fontSize: screenWidth < 480 ? "1rem" :
              screenWidth < 768 ? "1.2rem" :
              screenWidth < 1024 ? "1.1rem" :
              "1rem"
  }
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.contentContainer}>
        {/* First Parallelogram - slides in from left */}
        <div className={styles.animateLeft}>
          <Parallelogram
            width={
              screenWidth < 480 ? "80vw" : // New breakpoint for very small screens
            screenWidth < 768 ? "70vw" : 
            screenWidth < 1024 ? "60vw" : 
            "40vw" 
            }
            height={screenWidth < 768 ? "65vh" : "70vh"}
            color="var(--primary-color)"
            top="8vh"
            left={ 
              screenWidth < 480 ? "10vw" : // New breakpoint for very small screens
              screenWidth < 768 ? "8vw" : 
              screenWidth < 1024 ? "0vw" : 
              "-15vw"
            }
            zIndex="1"
            scale="1"
          >
            <div className={styles.parallelogramContent}>
              <h1 className={styles.title} style={dynamicStyles.title}>
                LIVING  &nbsp;
              
                OAKS  &nbsp;
             
                CHURCH  
              </h1>
              <h5 style={{ color: "white" }}>
                
                  ...that they may be called oaks of righteousness, the planting
                  of the Lord, that he may be glorified.
                  <br /> - Isaiah 61:3
               
              </h5>
              <div className={styles.separationLine}></div>
              <h4 className={styles.subtitle}>
                Leading REAL people <br /> with REAL hurts to find REAL hope in
                Jesus.
              </h4>
            </div>
          </Parallelogram>
        </div>

        {/* Second Parallelogram - slides in from right */}
        <div className={styles.animateRight}>
          <Parallelogram
           width={
            screenWidth < 480 ? "50vw" : // New breakpoint for very small screens
            screenWidth < 768 ? "40vw" : 
            screenWidth < 1024 ? "30vw" : 
            "20vw"
          }
      
            height= "60vh"
            top="8vh"
            left={
              screenWidth < 480 ? "-1vw" : // New breakpoint for very small screens
              screenWidth < 768 ? "5vw" : 
              screenWidth < 1024 ? "-5vw" : 
              "-20vw"
            }
            backImage="url('/images/LOCoakHomepage.jpg')"
            zIndex="2"
            scale="1"
          >
            <div className={styles.parallelogramImage}></div>
          </Parallelogram>
        </div>
      </div>

      <footer className={styles.imageGrid}>
        {["cred_heights", "cred_GCBA", "cred_SBTC", "cred_NAMB"].map(
          (img, index) => (
            <img
              key={index}
              src={`/images/${img}.png`}
              alt={img}
              className={styles.resizedImage}
              style={{ ...dynamicStyles.resizedImage }}
            />
          )
        )}
      </footer>
    </div>
  );
}

export default HomePage;
