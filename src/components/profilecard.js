import React from "react";
import "./profilecard.css";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

function Profilecard() {
  return (
    <div className="card-wrapper">
      <div className="card">
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <div className="card-image">
          <img
            src="https://image.ibb.co/dUTfmJ/profile_img.jpg"
            alt="profile one"
          ></img>
        </div>

        <ul className="social-icons">
          <li>
            <a href="#home">
              <FaFacebook className="fab"></FaFacebook>
            </a>
          </li>
          <li>
            <a href="#home">
              <FaInstagram className="fab"></FaInstagram>
            </a>
          </li>
          <li>
            <a href="#home">
              <FaTwitter className="fab"></FaTwitter>
            </a>
          </li>
        </ul>

        <div className="details">
          <h2>
            Abdiyu Ur
            <br></br>
            <span className="job-title">UI Developer</span>
          </h2>
        </div>
      </div>

      
    </div>
  );
}

export default Profilecard;
