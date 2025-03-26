import React from "react";


function Footer() {
    <footer>
  <div className="footer-content">
    {/* Contact Information */}
    <div>
      <h3>Contact Us</h3>
      <p>123 Church Street, Alvin, TX 77511</p>
      <p>Phone: (123) 456-7890</p>
      <p>Email: info@yourchurch.com</p>
      <div className="social-media">
        <a href="https://facebook.com/yourchurch">Facebook</a>
        <a href="https://instagram.com/yourchurch">Instagram</a>
        <a href="https://youtube.com/yourchurch">YouTube</a>
      </div>
    </div>

    {/* Quick Links */}
    <div>
      <h3>Quick Links</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/events">Events</a></li>
        <li><a href="/sermons">Sermons</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/privacy-policy">Privacy Policy</a></li>
      </ul>
    </div>

    {/* Service Times */}
    <div>
      <h3>Service Times</h3>
      <p>Sunday Worship: 10:00 AM</p>
      <p>Youth Group: Sunday 5:00 PM</p>
      <p>Connect Groups: Weekly (See Schedule)</p>
    </div>

    {/* Newsletter Signup */}
    <div>
      <h3>Stay Connected</h3>
      <form>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </div>

  {/* Copyright Notice */}
  <div className="footer-bottom">
    <p>&copy; {new Date().getFullYear()} Your Church Name. All Rights Reserved.</p>
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to Top</button>
  </div>
</footer>
}

export default Footer;