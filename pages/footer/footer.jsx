import React from "react";
import styles from "./footer.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaSnapchatGhost,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link"; // Import Next.js Link component

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Contact Information */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Contact Information</h3>
          <ul className={styles.contactList}>
            <li>
              <FaMapMarkerAlt className={styles.icon} />
              <span>3110 Mustang Rd, Alvin, TX 77511</span>
            </li>
            <li>
              <FaPhone className={styles.icon} />
              <span>(000) 000-0000</span>
            </li>
            <li>
              <FaEnvelope className={styles.icon} />
              <span>Cary's Email Address</span>
            </li>
          </ul>
          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/profile.php?id=61565398850141"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://x.com" aria-label="X (formerly Twitter)">
              <FaXTwitter />
            </a>
            <a href="https://snapchat.com" aria-label="Snapchat">
              <FaSnapchatGhost />
            </a>
          </div>
        </div>

        {/* Quick Links - Updated to match your sections */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Quick Links</h3>
          <ul className={styles.linkList}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#meetPerrins">Meet The Perrins</a>
            </li>
            <li>
              <a href="#mission">Our Mission</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#location">Location</a>
            </li>
            <li>
              <a href="#about">Name & Logo Story</a>
            </li>
            <li>
              <a href="#donations">Donations</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Service Times */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Service Times</h3>
          <ul className={styles.serviceTimes}>
            <li>
              <span className={styles.serviceName}>Sunday Worship:</span> Sunday
              10:00 AM
            </li>
            <li>
              <span className={styles.serviceName}>Youth Group:</span> Sunday
              5:00 PM
            </li>
            <li>
              <span className={styles.serviceName}>Connect Groups:</span>{" "}
              Thursday 6:30 PM
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContent}>
          <p>&copy; {currentYear} Living Oaks Church. All Rights Reserved.</p>
          <div className={styles.legalLinks}>
            <Link legacyBehavior href="/footer/privacy-policy" passHref>
              <a className={styles.legalLink}>Privacy Policy</a>
            </Link>
            <span> | </span>
            <Link legacyBehavior href="/footer/terms-of-use" passHref>
              <a className={styles.legalLink}>Terms of Use</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;