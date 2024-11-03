import React, { Component } from "react";
import qualityEquipment from "../images/u-1.png";
import nutrition from "../images/u-4.png";
import healthyDiet from "../images/u-2.png";
import sportTraining from "../images/u-3.png";

class UsSection extends Component {
  render() {
    return (
      <section className="us_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Why Choose Us</h2>
          </div>

          <div className="us_container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="box">
                  <div className="img-box">
                    <img src={qualityEquipment} alt="Quality Equipment" />
                  </div>
                  <div className="detail-box">
                    <h5>QUALITY EQUIPMENT</h5>
                    <p>
                      ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="box">
                  <div className="img-box">
                    <img src={nutrition} alt="Nutrition" />
                  </div>
                  <div className="detail-box">
                    <h5>NUTRITION</h5>
                    <p>
                      ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="box">
                  <div className="img-box">
                    <img src={healthyDiet} alt="Healthy Diet Plan" />
                  </div>
                  <div className="detail-box">
                    <h5>HEALTHY DIET PLAN</h5>
                    <p>
                      ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="box">
                  <div className="img-box">
                    <img src={sportTraining} alt="Sport Training" />
                  </div>
                  <div className="detail-box">
                    <h5>SPORT TRAINING</h5>
                    <p>
                      ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default UsSection;
