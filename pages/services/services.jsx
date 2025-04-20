import React, { useState, useEffect, useRef } from "react";
import NewBanner from "@/components/NewBanner/newbanner"; // Import the NewBanner component
import YouthGroup from "./servicesInfo/youth-group"; // Import the YouthGroup component
import ConnectGroups from "./servicesInfo/connect-groups"; // Import the ConnectGroups component
import SundayWorship from "./servicesInfo/sunday-worship"; // Import the SundayWorship component
import ChildCare from "./servicesInfo/child-care";
import styles from "./services.module.css"; // Import the CSS Module

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef(null); // Ref to track the popup content

  // Function to handle clicks outside the popup
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      closePopup();
    }
  };

  // Add event listener when the popup is open
  useEffect(() => {
    if (isPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupOpen]);

  const services = [
    { id: 1, title: "Sunday Worship", image: "/images/SundayWorship/sunday-worship-2.jpg", description: "Join us every Sunday for a time of worship, prayer, and teaching.", isNew: true },
    { id: 2, title: "Connect Groups", image: "/images/ConnectGroups/connect-group-1.jpg", description: "Dive deeper into God's Word with our weekly Bible Study sessions.", isNew: true },
    { id: 3, title: "Youth Group", image: "/images/YouthGroup/youth-group-1.jpg", description: "Our Youth Group is a vibrant community where teens can grow in their faith.", isNew: true },
    { id: 4, title: "Community Outreach", image: "/images/services-communityOutreach.png", description: "Our Community Outreach programs are designed to make a positive impact.", isNew: false },
    { id: 5, title: "Child Care", image: "/images/services-childcare.jpg", description: "Our Child Care services provide a safe, nurturing, and fun environment.", isNew: true },
    { id: 6, title: "Music Ministry", image: "/images/services-musicMinistery.png", description: "Our Music Ministry is dedicated to leading the congregation in worship.", isNew: false },
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedService(null);
  };

  return (
    <div className={styles.centerContainer}>
      <div>
        <h2 className={styles.title}>
          <i className="fa-solid fa-church" aria-hidden="true"></i> Services
        </h2>

        <div className={styles.servicesContainer}>
          {services.map((service) => (
            <div
              key={service.id}
              className={styles.serviceRectangle}
              onClick={() => handleServiceClick(service)}
            >
              <img
                src={service.image}
                alt={service.title}
                className={styles.serviceImage}
              />
              {/* Glare Effect */}
              <div className={styles.glareEffect}></div>
              {/* Overlay with Title */}
              <div className={styles.serviceOverlay}>{service.title}</div>
              {/* Add NewBanner if the service is new */}
              {service.isNew && <NewBanner />}
            </div>
          ))}
        </div>
      </div>

      {isPopupOpen && selectedService && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent} ref={popupRef}>
            <button className={styles.closeButton} onClick={closePopup}>
              &times;
            </button>
            {/* Render the appropriate component based on the selected service */}
            {   selectedService.title === "Youth Group" ? (
              <YouthGroup onClose={closePopup} />
            ) : selectedService.title === "Connect Groups" ? (
              <ConnectGroups onClose={closePopup} />
            ) : selectedService.title === "Sunday Worship" ? (
              <SundayWorship onClose={closePopup} />
            ) : selectedService.title === "Child Care" ? (
              <ChildCare onClose={closePopup} /> 
            ):(
              <>
                <h2>{selectedService.title}</h2>
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className={styles.popupImage}
                />
                <p>{selectedService.description}</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;