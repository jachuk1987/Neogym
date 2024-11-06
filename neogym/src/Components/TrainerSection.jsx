import React, { Component } from "react";
import trainer1 from "../images/t1.jpg";
import trainer2 from "../images/t2.jpg";
import trainer3 from "../images/t3.jpg";
import facebookLogo from "../images/facebook-logo.png";
import twitterLogo from "../images/twitter.png";
import instagramLogo from "../images/instagram-logo.png";

class TrainerSection extends Component {
  render() {
    return (
      <section className="trainer_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Our Gym Trainers</h2>
          </div>
          <div className="row">
            {/* Trainer 1 */}
            <div className="col-lg-4 col-md-6 mx-auto">
              <div className="box">
                <div className="name">
                  <h5>Smirth Jon</h5>
                </div>
                <div className="img-box">
                  <img src={trainer1} alt="Smirth Jon" />
                </div>
                <div className="social_box">
                  <a href="">
                    <img src={facebookLogo} alt="Facebook" />
                  </a>
                  <a href="">
                    <img src={twitterLogo} alt="Twitter" />
                  </a>
                  <a href="">
                    <img src={instagramLogo} alt="Instagram" />
                  </a>
                </div>
              </div>
            </div>
            {/* Trainer 2 */}
            <div className="col-lg-4 col-md-6 mx-auto">
              <div className="box">
                <div className="name">
                  <h5>Jean Doe</h5>
                </div>
                <div className="img-box">
                  <img src={trainer2} alt="Jean Doe" />
                </div>
                <div className="social_box">
                  <a href="">
                    <img src={facebookLogo} alt="Facebook" />
                  </a>
                  <a href="">
                    <img src={twitterLogo} alt="Twitter" />
                  </a>
                  <a href="">
                    <img src={instagramLogo} alt="Instagram" />
                  </a>
                </div>
              </div>
            </div>
            {/* Trainer 3 */}
            <div className="col-lg-4 col-md-6 mx-auto">
              <div className="box">
                <div className="name">
                  <h5>Alex Den</h5>
                </div>
                <div className="img-box">
                  <img src={trainer3} alt="Alex Den" />
                </div>
                <div className="social_box">
                  <a href="">
                    <img src={facebookLogo} alt="Facebook" />
                  </a>
                  <a href="">
                    <img src={twitterLogo} alt="Twitter" />
                  </a>
                  <a href="">
                    <img src={instagramLogo} alt="Instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TrainerSection;
