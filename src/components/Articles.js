import React from "react";
import articleimg from "../assets/img/blog (1).jpg";
function Articles() {
  return (
    <section className="place section" id="place">
      <h2 className="section__title"><u>Read</u> Our Articles</h2>
      <div className="place__container container grid">
        <div className="place__card">
          <img src={articleimg} alt="" className="place__img" />

          <div className="place__content">
            <span className="place__rating">
              <i className="ri-star-line place__rating-icon"></i>
              <span className="place__rating-number">4,8</span>
            </span>

            <div className="place__data">
              <h3 className="place__title">Depression</h3>
              <span className="place__subtitle">by Abdiyu</span>
              <span className="place__price">2499</span>
            </div>
          </div>

          <button className="button button--flex place__button">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>

        <div className="place__card">
          <img src={articleimg} alt="" className="place__img" />

          <div className="place__content">
            <span className="place__rating">
              <i className="ri-star-line place__rating-icon"></i>
              <span className="place__rating-number">5,0</span>
            </span>

            <div className="place__data">
              <h3 className="place__title">Bipolar Disorder</h3>
              <span className="place__subtitle">By Lidya</span>
              <span className="place__price">1599</span>
            </div>
          </div>

          <button className="button button--flex place__button">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>

        <div className="place__card">
          <img src={articleimg} alt="" className="place__img" />

          <div className="place__content">
            <span className="place__rating">
              <i className="ri-star-line place__rating-icon"></i>
              <span className="place__rating-number">4,9</span>
            </span>

            <div className="place__data">
              <h3 className="place__title">
                Disruptive behaviour and dissocial disorders
              </h3>
              <span className="place__subtitle">EE.UU</span>
              <span className="place__price">3499</span>
            </div>
          </div>

          <button className="button button--flex place__button">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>

        <div className="place__card">
          <img src={articleimg} alt="" className="place__img" />

          <div className="place__content">
            <span className="place__rating">
              <i className="ri-star-line place__rating-icon"></i>
              <span className="place__rating-number">4,8</span>
            </span>

            <div className="place__data">
              <h3 className="place__title">Anxiety Disorders</h3>
              <span className="place__subtitle">Australia</span>
              <span className="place__price">2499</span>
            </div>
          </div>

          <button className="button button--flex place__button">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>

        <div className="place__card">
          <img src={articleimg} alt="" className="place__img" />

          <div className="place__content">
            <span className="place__rating">
              <i className="ri-star-line place__rating-icon"></i>
              <span className="place__rating-number">4,8</span>
            </span>

            <div className="place__data">
              <h3 className="place__title">Hvar</h3>
              <span className="place__subtitle">Schizophrenia</span>
              <span className="place__price">1999</span>
            </div>
          </div>

          <button className="button button--flex place__button">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>

      </div>
      <button class="outlined-button ">Read All Articles</button>

    </section>
  );
}

export default Articles;
