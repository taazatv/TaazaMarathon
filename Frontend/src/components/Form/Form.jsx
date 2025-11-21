// src/components/Form/Form.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Form.css';

const Form = () => {
  const navigate = useNavigate();

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

  const [num1, setNum1] = useState(7);
  const [num2, setNum2] = useState(4);
  const [captchaResult, setCaptchaResult] = useState(11);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 10) + 1;
    const n2 = Math.floor(Math.random() * 10) + 1;
    setNum1(n1);
    setNum2(n2);
    setCaptchaResult(n1 + n2);
    setFormData(prev => ({ ...prev, captchaAnswer: '' }));
  };

  useEffect(() => generateCaptcha(), []);

  const getPrice = () => {
    const prices = { '2km': 100, '5km': 200, '10km': 350, '21km': 600 };
    return prices[formData.km] || 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    if (name === 'km' && value) generateCaptcha();
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Captcha Check
    if (parseInt(formData.captchaAnswer) !== captchaResult) {
      setError('Incorrect captcha! Try again.');
      generateCaptcha();
      setLoading(false);
      return;
    }

    // Prepare Data for Backend
    const payload = {
      name: formData.name.trim(),
      mobile: formData.mobile,
      email: formData.email.toLowerCase(),
      dob: formData.dob,
      bloodGroup: formData.bloodGroup,
      gender: formData.gender,
      distance: formData.km,
      tshirtSize: formData.tshirtSize,
      emergencyContact: formData.emergencyContact || '',
      runningClub: formData.runningClub || '',
      medicalHistory: formData.medicalHistory || '',
      couponCode: formData.couponCode || 'N/A',
    };

    try {
      const response = await fetch('http://localhost:5000/api/runners/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        alert(`SUCCESS! 
        BIB Number: ${result.data.bibNumber}
        Distance: ${formData.km.toUpperCase()}
        Amount: ₹${result.data.amountPaid}
        
        See you on 28th Dec 2025!`);
        
        navigate('/success'); // Optional: redirect to success page
      } else {
        setError(result.message || 'Registration failed!');
      }
    } catch (err) {
      console.error(err);
      setError('Network error! Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const price = getPrice();

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <div className="form-header">
          <Link to="/" className="back-home-btn">Back to Home</Link>
        </div>

        <h2 className="title">RUNATHON 2025 REGISTRATION</h2>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          {/* All your fields (same as before) */}
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
              <label>Coupon Code (Optional)</label>
              <div className="coupon-wrapper">
                <input type="text" name="couponCode" value={formData.couponCode} onChange={handleChange} placeholder="Enter coupon code" />
                <button type="button" className="verify-btn">Verify</button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="input-group">
              <label>Full Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter full name" />
            </div>
            <div className="input-group">
              <label>Mobile Number *</label>
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required placeholder="10-digit mobile" />
            </div>
          </div>

          <div className="row">
            <div className="input-group">
              <label>Email Address *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="example@gmail.com" />
            </div>
            <div className="input-group">
              <label>Date of Birth *</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
            </div>
          </div>

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
              <input type="tel" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} placeholder="Emergency number" />
            </div>
          </div>

          <div className="row full">
            <div className="input-group">
              <label>Running Club (Optional)</label>
              <input type="text" name="runningClub" value={formData.runningClub} onChange={handleChange} placeholder="e.g. Kolkata Runners" />
            </div>
          </div>

          <div className="row full">
            <div className="input-group">
              <label>Medical History (if any)</label>
              <textarea name="medicalHistory" value={formData.medicalHistory} onChange={handleChange} rows="3" placeholder="Asthma, BP, Allergies, etc." />
            </div>
          </div>

          {/* CAPTCHA */}
          <div className="captcha-section">
            <label>Solve: <strong>{num1} + {num2} = ?</strong></label>
            <div className="captcha-input-wrapper">
              <input type="number" name="captchaAnswer" value={formData.captchaAnswer} onChange={handleChange} placeholder="Answer" required />
              <button type="button" onClick={generateCaptcha} className="refresh-captcha">Refresh</button>
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

          {/* SUBMIT BUTTON */}
          <div className="submit-btn-container">
            <button type="submit" className="submit-btn" disabled={loading || !formData.km}>
              {loading ? 'Processing...' : `PROCEED TO PAY ₹${price}`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;