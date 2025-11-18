// src/components/Form/Form.js
import React, { useState } from 'react';
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
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration Submitted:', formData);
    alert('Thank you! Registration successful');
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2 className="title">FORM</h2>

        <form onSubmit={handleSubmit}>
          {/* KM + Coupon */}
          <div className="row">
            <div className="input-group">
              <label>Km *</label>
              <select name="km" value={formData.km} onChange={handleChange} required>
                <option value="">Select Distance</option>
                <option value="2km">2 Km</option>
                <option value="5km">5 Km</option>
                <option value="10km">10 Km</option>
                <option value="21km">21 Km (Half Marathon)</option>
              </select>
            </div>

            <div className="input-group coupon-group">
              <label>Coupon Code</label>
              <div className="coupon-wrapper">
                <input
                  type="text"
                  name="couponCode"
                  value={formData.couponCode}
                  onChange={handleChange}
                  placeholder="Enter code"
                />
                <button type="button" className="verify-btn">Verify</button>
              </div>
            </div>
          </div>

          {/* Name + Mobile */}
          <div className="row">
            <div className="input-group">
              <label>Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Full Name" />
            </div>
            <div className="input-group">
              <label>Mobile no! *</label>
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required placeholder="10-digit mobile" />
            </div>
          </div>

          {/* Email + DOB */}
          <div className="row">
            <div className="input-group">
              <label>Email id *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="example@gmail.com" />
            </div>
            <div className="input-group">
              <label>D.O.B *</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
            </div>
          </div>

          {/* Blood Group + Gender */}
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
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* T-Shirt + Emergency */}
          <div className="row">
            <div className="input-group">
              <label>T Shirt Size! * <small>(no exchange at the time of Expo)</small></label>
              <select name="tshirtSize" value={formData.tshirtSize} onChange={handleChange} required>
                <option value="">Select Size</option>
                <option>XS</option><option>S</option><option>M</option>
                <option>L</option><option>XL</option><option>XXL</option>
              </select>
            </div>
            <div className="input-group">
              <label>Emergency Contact Number</label>
              <input type="tel" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} placeholder="In case of emergency" />
            </div>
          </div>

          {/* Running Club */}
          <div className="row full">
            <div className="input-group">
              <label>Running Club / Group Name</label>
              <input type="text" name="runningClub" value={formData.runningClub} onChange={handleChange} placeholder="Optional" />
            </div>
          </div>

          {/* Medical History */}
          <div className="row full">
            <div className="input-group">
              <label>Any Medical History in Past (Pls mention)</label>
              <textarea
                name="medicalHistory"
                value={formData.medicalHistory}
                onChange={handleChange}
                rows="3"
                placeholder="e.g., Asthma, Heart issues, Allergies etc."
              />
            </div>
          </div>

          {/* BEAUTIFUL TERMS & CONDITIONS SECTION */}
          <div className="terms-section">
            <label className="checkbox-container">
              <input
                type="checkbox"
                name="termsAgreed"
                checked={formData.termsAgreed}
                onChange={handleChange}
                required
              />
              <span className="checkmark"></span>
              <span className="terms-text">
                I agree to the <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="terms-link">terms & conditions</a> listed below
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="submit-btn-container">
            <button type="submit" className="submit-btn">
              Proceed to Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;