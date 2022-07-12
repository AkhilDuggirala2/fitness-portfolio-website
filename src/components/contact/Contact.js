/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact-container">
        <h1>Contact Me</h1>
      </div>
      <div className="contact-me">
        <div className="contact-options">
          <div className="contact-option">
            <AiOutlineMail className="contact-option-icon" />
            <h4>Phone</h4>
            <h5>akhilduggirala19@gmail.com</h5>
            <a href="#">Send a message</a>
          </div>
          <div className="contact-option">
            <BsPhone className="contact-option-icon" />
            <h4>Phone</h4>
            <h5>+91xxxxxx9884</h5>
            <a href="#">Send a message</a>
          </div>
          <div className="contact-option">
            <FaWhatsapp className="contact-option-icon" />
            <h4>WhatsApp</h4>
            <h5>+528496173</h5>
            <a href="https://api.whatsapp.com/send?phone+9652869884">
              Send a message
            </a>
          </div>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form>
          <input
            className="contact-input-name"
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
          />
          <input
            className="contact-input-email"
            type="email"
            name="email"
            placeholder="Enter your Email"
            required
          />
          <textarea
            className="contact-message"
            name="message"
            row="7"
            placeholder="Your Message"
            required
          ></textarea>
          <div className="contact-button">
            <a href="#" className="contact-text">
              Send Message
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
