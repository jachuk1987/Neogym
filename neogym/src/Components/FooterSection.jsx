import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="container-fluid footer_section">
        <p>
          &copy; {new Date().getFullYear()} All Rights Reserved. Design by{" "}
          <a href="https://html.design/" target="_blank" rel="noopener noreferrer">
            Free Html Templates
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
