import React from 'react';
import { useRouter } from 'next/router';
import styles from '../pages/footer/footer.module.css';

const TermsOfUse = () => {
  const router = useRouter();

  const handleBackClick = () => {
    if (window.history.length > 1) {
      // If there's previous page in history
      router.back();
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
        });
      }, 100);
    } else {
      // If no history, go to home and scroll to bottom
      router.push('/').then(() => {
        setTimeout(() => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
          });
        }, 100);
      });
    }
  };

  return (
    <div className={styles.policyPage}>
      <h1>Terms of Use</h1>
      <p><strong>Last Updated:</strong> 03/29/2025</p>

      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>By using our website, you agree to these Terms of Use.</p>
      </section>

      <section>
        <h2>2. Permitted Use</h2>
        <p>Our content (sermons, blogs, images) is for personal, non-commercial use only.</p>
      </section>

      <section>
        <h2>3. User Conduct</h2>
        <p>You agree not to post harmful content or misuse our website in any way.</p>
      </section>

      <section>
        <h2>4. Donations</h2>
        <p>All donations are non-refundable. Tax receipts provided where applicable.</p>
      </section>

      <section>
        <h2>5. Intellectual Property</h2>
        <p>All content is owned by Living Oaks Church unless otherwise noted.</p>
      </section>

      <section>
        <h2>6. Disclaimer</h2>
        <p>Our resources are for spiritual guidance only. We're not liable for website errors or third-party content.</p>
      </section>

      <section>
        <h2>7. Governing Law</h2>
        <p>These Terms are governed by the laws of Texas.</p>
      </section>

      <div className={styles.contactSection}>
        <h3>Contact Us</h3>
        <p>Living Oaks Church<br />
        [Cary's email]<br />
        [Cary's Phone number]</p>
      </div>

      {/* Back Button */}
      <div className={styles.backButtonContainer}>
        <button 
          onClick={handleBackClick}
          className={styles.backButton}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default TermsOfUse;