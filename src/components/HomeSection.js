import React from "react";
import homeimg from "../assets/img/abhome3.jpg";

function HomeSection() {
  return (
    <section className="home" id="home">
      <img src={homeimg} alt="" className="home__img" />

      <div className="home__container container grid">
        <div className="home__data">
          <span className="home__data-subtitle">We offer</span>
          <h1 className="home__data-title">
            Mental <br />
            Health
            <b>
              Care To <br />
              Individuals In Need
            </b>
          </h1>
          <a href="#" className="button">
            Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
