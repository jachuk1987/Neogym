import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class HeroSection extends Component {
  render() {
    return (
      <div className="hero_area">
        {/* Header Section Starts */}
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <a className="navbar-brand" href="index.html">
                <span>Neogym</span>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="index.html">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="why.html">Why us</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="trainer.html">Trainers</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                  <div className="user_option">
                    <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                      <button className="btn my-2 my-sm-0 nav_search-btn" type="submit"></button>
                    </form>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        {/* End Header Section */}

        {/* Slider Section */}
        <section className="slider_section position-relative">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {[...Array(5)].map((_, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
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
            <ol className="carousel-indicators">
              {[...Array(5)].map((_, index) => (
                <li
                  key={index}
                  data-target="#carouselExampleIndicators"
                  data-slide-to={index}
                  className={index === 0 ? 'active' : ''}
                ></li>
              ))}
            </ol>
          </div>
        </section>
        {/* End Slider Section */}
      </div>
    );
  }
}

export default HeroSection;
