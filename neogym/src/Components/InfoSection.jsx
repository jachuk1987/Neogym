import React, { Component } from "react";
import locationIcon from "../images/location-icon.jpg"; // Update path as needed
import phoneIcon from "../images/phone-icon.jpg";
import emailIcon from "../images/email-icon.jpg";

class InfoSection extends Component {
  render() {
    return (
      <section className="info_section layout_padding2">
        <div className="container">
          <div className="info_items">
            {/* Location Item */}
            <a href="#">
              <div className="item">
                <div className="img-box box-1">
                  <img src={locationIcon} alt="Location Icon" />
                </div>
                <div className="detail-box">
                  <p>Location</p>
                </div>
              </div>
            </a>

            {/* Phone Item */}
            <a href="tel:+021234567890">
              <div className="item">
                <div className="img-box box-2">
                  <img src={phoneIcon} alt="Phone Icon" />
                </div>
                <div className="detail-box">
                  <p>+02 1234567890</p>
                </div>
              </div>
            </a>

            {/* Email Item */}
            <a href="mailto:demo@gmail.com">
              <div className="item">
                <div className="img-box box-3">
                  <img src={emailIcon} alt="Email Icon" />
                </div>
                <div className="detail-box">
                  <p>demo@gmail.com</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default InfoSection;
