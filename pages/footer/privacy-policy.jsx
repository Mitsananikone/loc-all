import React from 'react';
import styles from './footer.module.css'; // Reuse footer styles or create new ones
import { useRouter } from 'next/router';
import Link from 'next/link';

const PrivacyPolicy = () => {
  const router = useRouter();

  const handleBackClick = () => {
    // Always navigate to home page first
    router.push('/', undefined, { scroll: false }).then(() => {
      // Use setTimeout to ensure the page is fully loaded
      setTimeout(() => {
        // Scroll to the absolute bottom of the page
        window.scrollTo({
          top: document.documentElement.scrollHeight || document.body.scrollHeight,
          behavior: 'smooth'
        });
      }, 100); // 100ms delay to allow page to render
    });
  };

  return (
    <div className={styles.policyPage}>
      <h2>Privacy Policy</h2>
      <p><strong>Last Updated:</strong> 03/29/2025</p>

      <section>
        <h2>1. Introduction</h2>
        <p>Living Oaks Church  respects your privacy. This policy explains how we collect, use, and protect your personal information when you use our website.</p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <ul style={{ paddingLeft: "2rem" }}>
          <li><strong>Personal Information:</strong> Name, email, phone number when you contact us or register for events.</li>
          <li><strong>Payment Information:</strong> Processed securely via our payment providers (we don't store full payment data).</li>
          <li><strong>Automated Data:</strong> Cookies and IP addresses for analytics.</li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <p>We use your information to communicate about church activities, process donations, and improve our services.</p>
      </section>

      <section>
        <h2>4. Data Sharing</h2>
        <p>We never sell your data. We may share with service providers only as necessary for church operations.</p>
      </section>

      <section>
        <h2>5. Your Rights</h2>
        <p>You may request access to or deletion of your data by contacting us at [Cary's Email].</p>
      </section>

      <section>
        <h2>6. Security</h2>
        <p>We implement security measures including SSL encryption to protect your information.</p>
      </section>

      <section>
        <h2>7. Changes to This Policy</h2>
        <p>Updates will be posted here with a new "Last Updated" date.</p>
      </section>


 
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

PrivacyPolicy.getLayout = (page) => <Layout>{page}</Layout>;

export default PrivacyPolicy;