import React from "react";
import Parallelogram from "@/components/parallelogram/parallelogram";
import { loadStripe } from "@stripe/stripe-js";

function Donations() {
  // Define styles
  const styles = {
    centerContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      padding: "20px",
      backgroundColor: "var(--background-color)",
    },
    card: {
      position: "relative",
      width: "100%",
      maxWidth: "500px",
      margin: "0px auto",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      backgroundColor: "#fff",
    },
    backgroundImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.5,
      zIndex: 1,
    },
    topHalf: {
      position: "relative",
      zIndex: 2,
      padding: "20px",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      textAlign: "center",
    },
    parallelogramContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "10px",
    },
    donationNumber: {
      color: "var(--foreground-color)",
      fontSize: "2.6rem",
      fontStyle: "normal",
    },
    donationTitle: {
      fontSize: "1.5rem",
      fontWeight: "600",
      color: "var(--primary-color)",
      marginBottom: "10px",
    },
    bottomHalf: {
      position: "relative",
      zIndex: 2,
      padding: "20px",
      backgroundColor: "rgba(255, 255, 255, 0.7)",
    },
    donationDescription: {
      fontSize: "1rem",
      lineHeight: "1.6",
      color: "var(--primary-color)",
      textAlign: "left",
      marginBottom: "20px",
    },
    paymentButton: {
      display: "block",
      width: "100%",
      padding: "10px",
      backgroundColor: "var(--primary-color)",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      fontSize: "1rem",
      cursor: "pointer",
      textAlign: "center",
      margin: "10px 0",
    },
    secureMessage: {
      fontSize: "0.9rem",
      color: "var(--primary-color)",
      textAlign: "center",
      marginTop: "10px",
    },
  };

  // Function to handle payment (Stripe integration)
  const handlePayment = async () => {
    // try {
    //   // Call the API route to create a Stripe Checkout session
    //   const response = await fetch("/api/create-checkout-session", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
  
    //   const { id } = await response.json();
  
    //   // Redirect to Stripe Checkout
    //   const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    //   await stripe.redirectToCheckout({ sessionId: id });
    // } catch (err) {
     // console.error("Error during payment:", err);
      alert("Living Oaks Church bank account is not yet set up");
    // }
  };

  return (
    <div style={styles.centerContainer}>
      {/* Header */}
      <h1 style={{ fontSize: "1.5rem", color: "var(--primary-color)", textAlign: "center", marginBottom: "40px" }}>
        <i className="fa-solid fa-hand-holding-heart" aria-hidden="true"></i> Donations
      </h1>

      {/* Donation Card */}
      <div style={styles.card}>
        {/* Faded Background Image */}
        <div
          style={{
            ...styles.backgroundImage,
            backgroundImage: `url(/images/donation-background.jpg)`, // Replace with your image path
          }}
        ></div>

        {/* Top Half */}
        <div style={styles.topHalf}>
         
          <h2 style={styles.donationTitle}>Support Our Mission</h2>
        </div>

        {/* Bottom Half */}
        <div style={styles.bottomHalf}>
          <p style={styles.donationDescription}>
            Your generous donations help us continue our mission of spreading the Gospel, supporting our community, and providing resources for those in need. 
            <br/><br/>Every contribution, no matter the size, makes a difference.
          </p>

          {/* Payment Buttons */}
          <button style={styles.paymentButton} onClick={handlePayment}>
            Donate with Credit/Debit Card
          </button>
          <button style={styles.paymentButton} onClick={handlePayment}>
            Donate with Google Pay
          </button>
          <button style={styles.paymentButton} onClick={handlePayment}>
            Donate with PayPal
          </button>

          {/* Security Message */}
          <p style={styles.secureMessage}>
            <i className="fa-solid fa-lock" aria-hidden="true"></i> Your payment is secure. We use industry-standard encryption to protect your information.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Donations;