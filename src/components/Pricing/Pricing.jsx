// src/components/Pricing/Pricing.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';

const Pricing = () => {
  const tickets = [
    {
      distance: '42K',
      name: 'Full Marathon Race',
      earlyBird: 2500,
      normal: 3000,
    },
    {
      distance: '21K',
      name: 'Half Marathon Race',
      earlyBird: 1800,
      normal: 2200,
    },
    {
      distance: '10K',
      name: '10KM Race',
      earlyBird: 1200,
      normal: 1500,
    },
    {
      distance: '5K',
      name: '5KM Race',
      earlyBird: 800,
      normal: 1100,
    },
  ];

  return (
    <div className="pricing-page">
      <div className="pricing-container">
        {/* Header */}
        <div className="pricing-header">
          <h1>
            BUY YOUR <span className="highlight">EARLY BIRD</span> TICKET NOW!
          </h1>
          <p>
            Take advantage of our early bird pricing and save on your marathon ticket! 
            Enjoy the benefits of registering early while guaranteeing your participation.
          </p>
        </div>

        {/* Ticket Cards */}
        <div className="tickets-grid">
          {tickets.map((ticket) => (
            <div key={ticket.distance} className="ticket-card">
              <div className="distance">{ticket.distance}</div>
              <h3>{ticket.name}</h3>
              <div className="price-section">
                <div className="price-label">
                  <span>EARLY BIRD</span>
                  <span>NORMAL</span>
                </div>
                <div className="prices">
                  <div className="price early">
                    <span className="rupee">₹</span>{ticket.earlyBird.toLocaleString('en-IN')}
                  </div>
                  <div className="price normal">
                    <span className="rupee">₹</span>{ticket.normal.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>
              <Link to="/register" className="get-ticket-btn">
                GET TICKETS
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;