// src/components/Terms/Terms.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-page">
      <div className="terms-container">
        {/* Back to Home / Register Button */}
        <div className="terms-header">
          <Link to="/" className="back-btn">
            ← Back to Home
          </Link>
        </div>

        <h1 className="terms-title">Terms & Conditions</h1>
        <p className="terms-updated">Last updated: November 18, 2025</p>

        <div className="terms-content">

          <section className="term-section">
            <h2>Introduction</h2>
            <p>
              Welcome to <strong>Athlenic.com</strong>, an online marathon registration portal owned and operated by <strong>CDLS Technologies Private Limited</strong> ("we," "our," or "us"). By accessing and using our website and services, you agree to comply with and be bound by the following terms and conditions ("Terms"). Please read them carefully before using our services. If you do not agree with these Terms, you should not use our services.
            </p>
          </section>

          <section className="term-section">
            <h2>Eligibility</h2>
            <ul>
              <li><strong>Age Requirement:</strong> The minimum age requirement for participation varies by race category. Please refer to the specific event details for age requirements. Minors must have parental or guardian consent to register and participate.</li>
              <li><strong>Health and Fitness:</strong> You acknowledge that you are physically fit and medically able to participate in the marathon. You agree to consult a physician before participating in any physical activity.</li>
            </ul>
          </section>

          <section className="term-section">
            <h2>Registration</h2>
            <ul>
              <li><strong>Accuracy of Information:</strong> You agree to provide accurate, current, and complete information during the registration process. We reserve the right to cancel your registration if we find any discrepancies.</li>
              <li><strong>Payment:</strong> All registration fees must be paid in full at the time of registration. We accept various forms of payment as indicated on our website.</li>
            </ul>
          </section>

          <section className="term-section">
            <h2>Liability Waiver</h2>
            <ul>
              <li><strong>Assumption of Risk:</strong> You acknowledge and agree that participating in a marathon involves inherent risks, including but not limited to physical injury, illness, or death. You voluntarily assume all risks associated with your participation.</li>
              <li><strong>Limitation of Liability:</strong> CDLS Technologies Private Limited, its affiliates, and event organizers are not liable for any direct, indirect, incidental, special, or consequential damages arising out of or related to your participation in the event.</li>
            </ul>
          </section>

          <section className="term-section">
            <h2>Code of Conduct</h2>
            <ul>
              <li><strong>Respectful Behavior:</strong> Participants must conduct themselves in a respectful and sportsmanlike manner at all times. Any form of harassment, cheating, or disruptive behavior will not be tolerated and may result in disqualification.</li>
              <li><strong>Compliance with Rules:</strong> Participants must follow all event rules and instructions provided by the organizers. Failure to comply may result in disqualification without a refund.</li>
            </ul>
          </section>

          <section className="term-section">
            <h2>Intellectual Property</h2>
            <ul>
              <li><strong>Website Content:</strong> All content on Athlenic.com, including text, graphics, logos, and images, is the property of CDLS Technologies Private Limited or its licensors and is protected by copyright and other intellectual property laws.</li>
              <li><strong>Use of Content:</strong> You may not reproduce, distribute, or use any content from our website without our prior written permission.</li>
            </ul>
          </section>

          <section className="term-section">
            <h2>Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our services after the posting of changes constitutes your acceptance of such changes.
            </p>
          </section>

          <section className="term-section">
            <h2>Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of <strong>India</strong>. Any disputes arising out of or relating to these Terms shall be resolved in the courts of <strong>New Delhi, India</strong>.
            </p>
          </section>

          <section className="term-section contact-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns about these Terms, please contact us at:<br />
              <a href="mailto:support@athlenic.com" className="contact-email">support@athlenic.com</a>
            </p>
          </section>

        </div>

        <div className="terms-footer">
          <p>© 2025 Athlenic.com • Powered by CDLS Technologies Private Limited</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;