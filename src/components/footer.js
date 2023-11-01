import React from "react";

function Footer() {
  return (
    <footer className="footer section">
      <div className="footer__container container ">
        <p className="section__title">.:.</p>
      </div>
      <div className="footer__content grid">
        <p className="footer__copy">
          &#169; 2021 <b>A</b>Code. All rigths reserved.
        </p>
        <div className="footer__rights">
          <div className="footer__terms">
            <a href="#home" className="footer__link">
              Support Center
            </a>

            <a href="#home" className="footer__terms-link">
              Privacy Policy
            </a>
            <div>
              <a
                href="https://www.facebook.com/"
                rel="noreferrer"
                target="_blank"
                className="footer__social"
              >
                <i className="ri-facebook-box-fill"></i>
              </a>
              <a
                href="https://twitter.com/"
                rel="noreferrer"
                target="_blank"
                className="footer__social"
              >
                <i className="ri-twitter-fill"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                rel="noreferrer"
                target="_blank"
                className="footer__social"
              >
                <i className="ri-instagram-fill"></i>
              </a>
              <a
                href="https://www.youtube.com/"
                rel="noreferrer"
                target="_blank"
                className="footer__social"
              >
                <i className="ri-youtube-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
