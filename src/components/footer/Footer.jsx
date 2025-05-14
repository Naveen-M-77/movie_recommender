import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/play.png";

const Footer = () => {
  return (
    <>
      <section className="service">
        <div className="container">
          <div className="service-banner">
            <figure>
              <img
                src="https://media.flaticon.com/img/search/categories/electronics.jpg"
                alt="HD 4k resolution! only $3.99"
              />
            </figure>
            <a
              href="./assets/images/service-banner.jpg"
              download
              className="service-btn"
            >
              <span>Download</span>
              <ion-icon name="download-outline"></ion-icon>
            </a>
          </div>

          <div className="service-content">
            <p className="service-subtitle">Our Services</p>
            <h2 className="h2 service-title">
              Download Your Shows Watch Offline.
            </h2>
            <p className="service-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. There are
              many variations of passages of lorem Ipsum available, but the
              majority have suffered alteration.
            </p>

            <ul className="service-list">
              <li>
                <div className="service-card">
                  <div className="card-icon">
                    <img
                      src="https://cdn-icons.flaticon.com/png/128/3386/premium/3386992.png"
                      alt=""
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="h3 card-title">Enjoy on Your TV.</h3>
                    <p className="card-text">
                      Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple
                      TV, Blu-ray players and more.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="service-card">
                  <div className="card-icon">
                    <img
                      src="https://cdn-icons.flaticon.com/png/128/665/premium/665948.png"
                      alt=""
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="h3 card-title">Watch Everywhere.</h3>
                    <p className="card-text">
                      Stream unlimited movies and TV shows on your phone,
                      tablet, laptop, and TV.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="title-wrapper">
            <h2 className="cta-title">Trial start first 30 days.</h2>
            <p className="cta-text">
              Enter your email to create or restart your membership.
            </p>
          </div>
          <form action="" className="cta-form">
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="email-field"
            />
            <button type="submit" className="cta-form-btn">
              Get started
            </button>
          </form>
        </div>
      </section>

      <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
        <div className="footer__content container">
          <div className="footer__content__logo">
            <div className="logo">
              <img src={logo} alt="Logo" />
              <Link to="/">Netflix Movies</Link>
            </div>
          </div>
          <div className="footer__content__menus">
            <div className="footer__content__menu">
              <Link to="/">Home</Link>
              <Link to="/contact">Contact us</Link>
              <Link to="/terms">Term of services</Link>
              <Link to="/about">About us</Link>
            </div>
            <div className="footer__content__menu">
              <Link to="/live">Live</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/premium">Premium</Link>
              <Link to="/privacy">Privacy policy</Link>
            </div>
            <div className="footer__content__menu">
              <Link to="/must-watch">You must watch</Link>
              <Link to="/recent-release">Recent release</Link>
              <Link to="/top-imdb">Top IMDB</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2025 <a href="#">The Usual Chaos</a>. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
