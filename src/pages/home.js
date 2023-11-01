import React from "react";
import abtimg from "../assets/img/blog (1).jpg";
import abtimg2 from "../assets/img/blog (3).jpg";
import { Link } from "react-router-dom";
import Profilecard from "../components/profilecard";
import Sponsors from "../components/sponsors";
import Articles from "../components/Articles";
import HomeSection from "../components/HomeSection";
import HappyClients from "../components/HappyClients";
function Homepage() {
  return (
    <div className="main">
      <HomeSection></HomeSection>

      <section className="about section" id="about">
        <div className="about__container container grid">
          <div className="about__data">
            <h2 className="section__title about__title">
              About <br />
              Inner Peace
            </h2>
            <p className="about__description">
              Inner Peace was established to offer comprehensive mental health
              care to individuals in need. We strongly believe that fostering
              mental wellness benefits an individual's overall well-being due to
              its importance in life. Our organization's main objective is to
              aid people in uncovering inner peace
            </p>
            <Link to="/about"><button  class="outlined-button">Read More</button></Link>
          </div>
          <div className="about__img">
            <div className="about__img-overlay">
              <img src={abtimg} alt="" className="about__img-one" />
            </div>

            <div className="about__img-overlay">
              <img src={abtimg2} alt="" className="about__img-two" />
            </div>
          </div>
        </div>
      </section>

      <section className="discover section" id="discover">
        <div className="teams__container container grid">
          <div className="about__data">
            <h2 className="section__title about__title">Meet Our Team</h2>
            <p className="about__description">
              Inner Peace was established to offer comprehensive mental health
              care to individuals in need. We strongly believe that fostering
              mental wellness benefits an individual's overall well-being due to
              its importance in life. Our organization's main objective is to
              aid people in uncovering inner peace
            </p>

            <Link to="/teams"><button class="outlined-button">All Team Members</button></Link>
          </div>

          <div className="teams">
            <Profilecard></Profilecard>
            <Profilecard></Profilecard>
            <Profilecard></Profilecard>
            <Profilecard></Profilecard>
            <Profilecard></Profilecard>
            <Profilecard></Profilecard>
          </div>
        </div>
      </section>
      <Sponsors></Sponsors>
      <Articles></Articles>
      <HappyClients></HappyClients>


      <section className="subscribe section">
        <div className="subscribe__bg">
          <div className="subscribe__container container">
            <h2 className="section__title subscribe__title">
              We Would Like to hear from you<br></br>Contact us
            </h2>

            <form action="" className="subscribe__form">
              <input
                type="nuimber"
                placeholder="Phone Number"
                className="subscribe__input"
              />
              <input
                type="email"
                placeholder="Enter email"
                className="subscribe__input"
              />

              <textarea
                type="text"
                placeholder="Type Message"
                className="subscribe__textarea"
              />

              <button className="button">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
