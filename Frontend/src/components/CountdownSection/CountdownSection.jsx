import React, { useEffect, useState } from "react";
import "./CountdownSection.css";

function CountdownSection() {
  const targetDate = new Date("December 06, 2025 00:00:00").getTime();

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-wrapper">
      <h2 className="countdown-title">COUNTDOWN TO MILEBLAST MARATHON 2025</h2>

      <div className="countdown-container">

        <div className="countdown-circles">

          <div className="circle-box">
            <div className="circle">{time.days}</div>
            <p>DAYS</p>
          </div>

          <div className="circle-box">
            <div className="circle">{String(time.hours).padStart(2, "0")}</div>
            <p>HOURS</p>
          </div>

          <div className="circle-box">
            <div className="circle">{String(time.minutes).padStart(2, "0")}</div>
            <p>MINUTES</p>
          </div>

          <div className="circle-box">
            <div className="circle">{String(time.seconds).padStart(2, "0")}</div>
            <p>SECONDS</p>
          </div>

        </div>

        <div className="countdown-info">
          <div className="info-row">
            <span className="info-icon">🏁</span>
            <span className="info-text">DECEMBER 06, 2025</span>
          </div>

          <div className="info-row">
            <span className="info-icon">📍</span>
            <span className="info-text">KOLKATA, INDIA</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CountdownSection;
