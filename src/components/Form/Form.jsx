// src/components/Form/Form.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    km: '',
    couponCode: '',
    name: '',
    mobile: '',
    email: '',
    dob: '',
    bloodGroup: '',
    gender: '',
    tshirtSize: '',
    emergencyContact: '',
    runningClub: '',
    medicalHistory: '',
    termsAgreed: false,
    captchaAnswer: '',
  });

  // Captcha State
  const [num1, setNum1] = useState(5);
  const [num2, setNum2] = useState(3);
  const [captchaResult, setCaptchaResult] = useState(8);

  // Generate Random Captcha
  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 10) + 1;
    const n2 = Math.floor(Math.random() * 10) + 1;
    setNum1(n1);
    setNum2(n2);
    setCaptchaResult(n1 + n2);
    setFormData(prev => ({ ...prev, captchaAnswer: '' }));
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  // FIXED PRICE FUNCTION – NO DOUBLE RETURN!
  const getPrice = () => {
    switch (formData.km) {
      case '2km':  return 100;
      case '5km':  return 200;
      case '10km': return 350;
      case '21km': return 600;
      default:     return 0;
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    // Refresh captcha when distance is selected
    if (name === 'km' && value) {
      generateCaptcha();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Captcha Check
    if (parseInt(formData.captchaAnswer) !== captchaResult) {
      alert('Captcha Wrong! Try Again.');
      generateCaptcha();
      return;
    }

    const price = getPrice();
    alert(`Registration Successful!\nName: ${formData.name}\nDistance: ${formData.km.toUpperCase()}\nAmount: ₹${price}`);
    console.log('Submitted:', formData);
  };

  const price = getPrice();

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <div className="form-header">
          <Link to="/" className="back-home-btn">Back to Home</Link>
        </div>

        <h2 className="title">RUNATHON REGISTRATION</h2>

        <form onSubmit={handleSubmit}>
          {/* Distance */}
          <div className="row">
            <div className="input-group">
              <label>Distance *</label>
              <select name="km" value={formData.km} onChange={handleChange} required>
                <option value="">Select Distance</option>
                <option value="2km">2 Km Fun Run - ₹100</option>
                <option value="5km">5 Km - ₹200</option>
                <option value="10km">10 Km - ₹350</option>
                <option value="21km">21 Km (Half Marathon) - ₹600</option>
              </select>
            </div>

            <div className="input-group coupon-group">
              <label>Coupon Code</label>
              <div className="coupon-wrapper">
                <input type="text" name="couponCode" value={formData.couponCode} onChange={handleChange} placeholder="Enter code" />
                <button type="button" className="verify-btn">Verify</button>
              </div>
            </div>
          </div>

          {/* Name & Mobile */}
          <div className="row">
            <div className="input-group">
              <label>Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label>Mobile No *</label>
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
            </div>
          </div>

          {/* Email & DOB */}
          <div className="row">
            <div className="input-group">
              <label>Email *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label>Date of Birth *</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
            </div>
          </div>

          {/* Blood Group & Gender */}
          <div className="row">
            <div className="input-group">
              <label>Blood Group *</label>
              <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required>
                <option value="">Select</option>
                <option>A+</option><option>A-</option><option>B+</option><option>B-</option>
                <option>AB+</option><option>AB-</option><option>O+</option><option>O-</option>
              </select>
            </div>
            <div className="input-group">
              <label>Gender *</label>
              <select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Select</option>
                <option>Male</option><option>Female</option><option>Other</option>
              </select>
            </div>
          </div>

          {/* T-Shirt & Emergency */}
          <div className="row">
            <div className="input-group">
              <label>T-Shirt Size *</label>
              <select name="tshirtSize" value={formData.tshirtSize} onChange={handleChange} required>
                <option value="">Select Size</option>
                <option>XS</option><option>S</option><option>M</option><option>L</option><option>XL</option><option>XXL</option>
              </select>
            </div>
            <div className="input-group">
              <label>Emergency Contact</label>
              <input type="tel" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} />
            </div>
          </div>

          <div className="row full">
            <div className="input-group">
              <label>Running Club (Optional)</label>
              <input type="text" name="runningClub" value={formData.runningClub} onChange={handleChange} />
            </div>
          </div>

          <div className="row full">
            <div className="input-group">
              <label>Medical History</label>
              <textarea name="medicalHistory" value={formData.medicalHistory} onChange={handleChange} rows="3" />
            </div>
          </div>

          {/* CAPTCHA */}
          <div className="captcha-section">
            <label>Solve: <strong>{num1} + {num2} = ?</strong></label>
            <div className="captcha-input-wrapper">
              <input
                type="number"
                name="captchaAnswer"
                value={formData.captchaAnswer}
                onChange={handleChange}
                placeholder="Answer"
                required
              />
              <button type="button" onClick={generateCaptcha} className="refresh-captcha">
                Refresh
              </button>
            </div>
          </div>

          {/* PRICE */}
          {formData.km && (
            <div className="price-display">
              <strong>Total Amount: ₹{price}</strong>
            </div>
          )}

          {/* TERMS */}
          <div className="terms-section">
            <label className="checkbox-container">
              <input type="checkbox" name="termsAgreed" checked={formData.termsAgreed} onChange={handleChange} required />
              <span className="checkmark"></span>
              <span className="terms-text">
                I agree to the <a href="/terms" className="terms-link">Terms & Conditions</a>
              </span>
            </label>
          </div>

          {/* SUBMIT */}
          <div className="submit-btn-container">
            <button type="submit" className="submit-btn" disabled={!formData.km}>
              PROCEED TO PAY ₹{price}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;