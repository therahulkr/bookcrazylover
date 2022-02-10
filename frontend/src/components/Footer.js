import React, { Fragment } from 'react';

const Footer = () => {
  return (<Fragment>
      <section id="details">

          <div className="number">
          <a className="webname" href="/" style={{
              width:"30%"
          }}>
              Bookcrazylover
          </a>
              <div id="inner">
              <h1>Contact Details:</h1>
                  <ol>
                      <li>Veenita Jeph</li>
                      <li>Contact number:8178595005</li>
                      <li>Instagram : @thelostcrazybooklover</li>
                  </ol>
              </div>
          </div>

          <div id="icon">
              <img src={require("../imgs/whitapp/fblogo.jpeg")} />
              <img src={require("../imgs/whitapp/instalogo.jpeg")} />
              <img src={require("../imgs/whitapp/ytubelogo.jpeg")} />
              <img src={require("../imgs/whitapp/twitter.jpeg")} />
              <img src={require("../imgs/whitapp/wa.jpeg")} />
              
          </div>


      </section>
  </Fragment>);
};

export default Footer;
