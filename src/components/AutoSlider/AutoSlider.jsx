import React, { useEffect, useState } from "react";
import "./AutoSlider.css";

const images = [

"/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
];

function AutoSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${images[current]})` }}
        key={current}
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-subtitle">MILEBLAST MARATHON 2025</p>

        <h1 className="hero-title">
          JOIN THE <span className="highlight">RACE,</span><br />
          <span className="no-break">
            PUSH YOUR <span className="highlight">LIMITS.</span>
          </span>
        </h1>

        <p className="hero-text">
          Mileblast Marathon 2025 is more than just a test of endurance —
         
          it’s a celebration of human determination and resilience.
        </p>

        <button className="buynow-btn">BUY NOW!</button>
      </div>
    </div>
  );
}

export default AutoSlider;