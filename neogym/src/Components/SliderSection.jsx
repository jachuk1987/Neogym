import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is loaded

class SliderSection extends Component {
  render() {
    return (
      <section className="slider_section position-relative">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {/* First Slide (active) */}
            <div className="carousel-item active">
              <div className="container">
                <div className="col-lg-10 col-md-11 mx-auto">
                  <div className="detail-box">
                    <div>
                      <h3>Fitness</h3>
                      <h2>Training</h2>
                      <h1>Neogym</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
                      </p>
                      <div className="">
                        <a href="">Contact Us</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Remaining Slides */}
            {Array.from({ length: 4 }).map((_, index) => (
              <div className="carousel-item" key={index}>
                <div className="container">
                  <div className="col-lg-10 col-md-11 mx-auto">
                    <div className="detail-box">
                      <div>
                        <h3>Fitness</h3>
                        <h2>Training</h2>
                        <h1>Neogym</h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
                        </p>
                        <div className="">
                          <a href="">Contact Us</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <ol className="carousel-indicators">
            {Array.from({ length: 5 }).map((_, index) => (
              <li
                key={index}
                data-target="#carouselExampleIndicators"
                data-slide-to={index}
                className={index === 0 ? "active" : ""}
              ></li>
            ))}
          </ol>
        </div>
      </section>
    );
  }
}

export default SliderSection;
