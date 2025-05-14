import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './movie-list.scss';




  const ServiceList = props => {
  


return(
    <section class="service">
    <div class="container">

      <div class="service-banner">
        <figure>
          <img src="http://127.0.0.1:5500/assets/images/service-banner.jpg" alt="HD 4k resolution! only $3.99"></img>
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
);
    

    
}


export default ServiceList;
