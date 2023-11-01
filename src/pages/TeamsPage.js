import React from "react";
import homeimg from "../assets/img/teamshome.jpg";
import Profilecard from "../components/profilecard";
function TeamsPage() {
  return (
    <div>
      <section className="home" id="home">
        <img src={homeimg} alt="" />
      </section>
      <section className="about section" id="about">
        <h2 className="section__title">Founders</h2>
       
        <div className="founder__container container grid">
          <div className="founder__content">
            <img
              className="founder__img"
              src="https://image.ibb.co/dUTfmJ/profile_img.jpg"
              alt="profile one"
            ></img>
            <h2 className="founder">Abdiyu Urgesa</h2>
            <p className="founder_title">Programmer</p>
            <p className="founder__discription">
              Inner Peace was established to offer comprehensive mental health
              care to individuals in need. We strongly believe that fostering
              mental wellness benefits an individual's overall well-being due to
              its importance in life. Our organization's main objective is to
              aid people in uncovering inner peace
            </p>
          </div>
          <div className="founder__content">
            <img
              className="founder__img"
              src="https://image.ibb.co/dUTfmJ/profile_img.jpg"
              alt="profile one"
            ></img>
            <h2 className="founder">Abdiyu Urgesa</h2>
            <p className="founder_title">Programmer</p>
            <p className="founder__discription">
              Inner Peace was established to offer comprehensive mental health
              care to individuals in need. We strongly believe that fostering
              mental wellness benefits an individual's overall well-being due to
              its importance in life. Our organization's main objective is to
              aid people in uncovering inner peace
            </p>
          </div>
          <div className="founder__content">
            <img
              className="founder__img"
              src="https://image.ibb.co/dUTfmJ/profile_img.jpg"
              alt="profile one"
            ></img>
            <h2 className="founder">Abdiyu Urgesa</h2>
            <p className="founder_title">Programmer</p>
            <p className="founder__discription">
              Inner Peace was established to offer comprehensive mental health
              care to individuals in need. We strongly believe that fostering
              mental wellness benefits an individual's overall well-being due to
              its importance in life. Our organization's main objective is to
              aid people in uncovering inner peace
            </p>
          </div>
        </div>
      </section>
      <section className="about section" id="about">
        <div className="about__container container">
          <div className="about__data">
            <h2 className="section__title">Our Team</h2>
            <div className="teams">
              <Profilecard></Profilecard>
              <Profilecard></Profilecard>
              <Profilecard></Profilecard>
              <Profilecard></Profilecard>
              <Profilecard></Profilecard>
              <Profilecard></Profilecard>
              <Profilecard></Profilecard>
              <Profilecard></Profilecard>
              <Profilecard></Profilecard>
              <Profilecard></Profilecard>
              <Profilecard></Profilecard>
              <Profilecard></Profilecard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamsPage;
