import React from "react";
import Parallelogram from "@/components/parallelogram/parallelogram";
import styles from "./about.module.css"; // Import the CSS Module

function About() {
  return (
    <div className={styles.centerContainer}>
      <div className={styles.background}>
        {/* Flex container for logo and title */}
        <div className={styles.logoTitleContainer}>
          <div>
            <img
              src="./images/LOClogoBlackCircle.png"
              alt="Logo"
              className={styles.logoImage}
            />
          </div>
          <h2 className={styles.title}>About the Name and Logo</h2>
        </div>

        {/* First Parallelogram */}
        <div className={styles.parallelogramWrapper}>
          <Parallelogram
            width="80vw" // Default width
            height="40vh" // Height of the parallelogram
            color="var(--secondary-color)"
            top="-2vh"
            zIndex="-2"
          >
             {/* <Parallelogram
            width="600px" // Default width
            height="350px" // Height of the parallelogram
            color="var(--secondary-color)"
            top="-2vh"
            zIndex="-2"
          ></Parallelogram> */}
            <div className={styles.parallelogramContent}>
              <p>
                The city of Alvin is known for its Southern Oak Trees. The
                city's official logo once highlighted Alvin's first meeting
                center, the Oak Tree in National Oak Park.
              </p>
            </div>
          </Parallelogram>
        </div>

        {/* Second Parallelogram */}
        <div className={styles.parallelogramWrapper}>
          <Parallelogram
            width="80vw" // Default width
            height="50vh" // Height of the parallelogram
            top="-1vh"
            backImage="url('/images/Kintsugi.png')"
            zIndex="2"
          >
            <div className={styles.parallelogramContent}>
              <h2>Kintsugi means golden repair</h2>
              <br />
              <p>
                It is a Japanese art form of decorating repair seams of broken
                pottery with a precious metal, making the repaired form more
                valuable than the unbroken form. <br />
                The Christ-follower knows this "golden repair," as well, that
                the Holy Spirit can give to a broken heart and soul.
              </p>
            </div>
          </Parallelogram>
        </div>
      </div>
    </div>
  );
}

export default About;