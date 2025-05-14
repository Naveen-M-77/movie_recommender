import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';


import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/play.png';

const Footer = () => {
    return (
        <>
          <section class="service">
    <div class="container">

      <div class="service-banner">
        <figure>
          <img src="https://media.flaticon.com/img/search/categories/electronics.jpg" alt="HD 4k resolution! only $3.99"></img>
        </figure>

        <a href="./assets/images/service-banner.jpg" download class="service-btn">
          <span>Download</span>

          <ion-icon name="download-outline"></ion-icon>
        </a>
      </div>

      <div class="service-content">

        <p class="service-subtitle">Our Services</p>

        <h2 class="h2 service-title">Download Your Shows Watch Offline.</h2>

        <p class="service-text">
          Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of
          passages of lorem
          Ipsum available, but the majority have suffered alteration in some injected humour.
        </p>

        <ul class="service-list">

          <li>
            <div class="service-card">

              <div class="card-icon">
                <img src="https://cdn-icons.flaticon.com/png/128/3386/premium/3386992.png?token=exp=1653245908~hmac=86b65d8c42122b68070a6789aa56d95d" alt="" />
              </div>

              <div class="card-content">
                <h3 class="h3 card-title">Enjoy on Your TV.</h3>

                <p class="card-text">
                  Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.
                </p>
              </div>

            </div>
          </li>

          <li>
            <div class="service-card">

              <div class="card-icon">
              <img src="https://cdn-icons.flaticon.com/png/128/665/premium/665948.png?token=exp=1653246194~hmac=09cc1aef219e7399123d126b4ea4cc87" alt="" />
              </div>

              <div class="card-content">
                <h3 class="h3 card-title">Watch Everywhere.</h3>

                <p class="card-text">
                  Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.
                </p>
              </div>

            </div>
          </li>

        </ul>

      </div>

    </div>
  </section>


         <section class="cta">
        <div class="container">

          <div class="title-wrapper">
            <h2 class="cta-title">Trial start first 30 days.</h2>

            <p class="cta-text">
              Enter your email to create or restart your membership.
            </p>
          </div>

          <form action="" class="cta-form">
            <input type="email" name="email" required placeholder="Enter your email" class="email-field"></input>

            <button type="submit" class="cta-form-btn">Get started</button>
          </form>

        </div>
      </section>


        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">Netflix Movies</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">Term of services</Link>
                        <Link to="/">About us</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Live</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Pravacy policy</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">You must watch</Link>
                        <Link to="/">Recent release</Link>
                        <Link to="/">Top IMDB</Link>
                    </div>
                </div>
            </div>
        </div>


<div class="bottom">
<div class="container">

  <p class="copyright">
    &copy; 2022 <a href="#">Sandesh Powar</a>. All Rights Reserved
  </p>

  <img src="" alt="Online banking companies logo" class="bottom-img"></img>

</div>
</div>


</>
    );
}

export default Footer;
