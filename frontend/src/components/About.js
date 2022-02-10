import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import "./about.css"

const About = () => {
  return (
  <Fragment>
          <section id="about">
        <img src={require("../imgs/ABOUT.JPEG")}/>
        
        <div>   <br></br>  <b className='usethisheading'>About</b>   <br></br><br></br>
        I am Veenita<a href="/new">.</a> I'm a law student but an avid reader, 
        love to know history, travel freak based in New Delhi, India.
             <br></br><br></br>
             It's so lovely that you are here reading and scrolling down. 
             I m so joyous to know that we have the same interest and love towards the books.
              A reader finds another reader. Here, I share my views on books after reading them.
              I usually pick nonfiction, law-based,  historic, tales, translates, Rare classics, and many more.
<br></br><br></br>
To learn more about Grace, watch her 73 Questions video on Youtube! </div>
</section>
  </Fragment>
  
  );
};

export default About;
