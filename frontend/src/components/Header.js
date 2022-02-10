import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
;


const Header = () => {


  return (<Fragment>
      <nav id="navigation">
        <div id='phelasection'>

        <Link className="webname" to="/">
            Bookcrazylover
        </Link>
        <Search/>
        </div>
        <ul id = "heading">
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/blogs">BLOGS</Link></li>
            <li><a href="/books">BOOKS</a></li>
            <li><Link to="/authors">AUTHORS</Link></li>
            <li><a href="#details">CONTACT-US</a></li>
        </ul>

    </nav>
  </Fragment>);
};

export default Header;
