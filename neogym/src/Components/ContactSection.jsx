import React, { Component } from "react";
import contactImage from "../images/contact-img.jpg"; // Adjust the path as needed

class ContactSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Logic for form submission (e.g., send data to an API or display it in the console)
    console.log("Form submitted:", this.state);
  };

  render() {
    return (
      <section className="contact_section">
        <div className="container-fluid">
          <div className="row">
            {/* Left Side Image */}
            <div className="col-md-6 px-0">
              <div className="img-box">
                <img src={contactImage} alt="Contact Us" />
              </div>
            </div>

            {/* Right Side Form */}
            <div className="col-lg-5 col-md-6">
              <div className="form_container pr-0 pr-lg-5 mr-0 mr-lg-2">
                <div className="heading_container">
                  <h2>Contact Us</h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      name="phone"
                      value={this.state.phone}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="message-box"
                      placeholder="Message"
                      name="message"
                      value={this.state.message}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="d-flex">
                    <button type="submit">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactSection;
