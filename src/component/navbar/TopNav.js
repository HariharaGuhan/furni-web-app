import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./nav.css";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const TopNav = () => {
  return (
    
    <>
      <nav
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
        arial-label="Furni navigation bar"
      >
        <div className="container">
         <Link to="/home"> <a className="navbar-brand" href="">
            Furni<span>.</span>
          </a></Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item ">
                <Link to="/home">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul
                  className="dropdown-menu bg-dark"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link to="/chair">
                      <a className="dropdown-item">Chair</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/table">
                      <a className="dropdown-item">Tables</a>
                    </Link>
                  </li>

                
                  <li>
                    <Link to="/sofa">
                      <a className="dropdown-item">Sofa</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/product">
                  <a className="nav-link">
                    Shop
                  </a>
                </Link>
              </li>
            
              <li>
              <Link to="/favorites">
              <a className="nav-link" href="">
                  Favourites
                </a>
                </Link>
                
              </li>
              <li>
              <Link to="/contact"><a className="nav-link">
                  Contact us
                </a></Link>
              </li>
            </ul>

            <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
              <a className="nav-link" href="#">
                  <FaUser />
                </a>
              </li>
              <li>
              <a className="nav-link" >
                 <Link to="/addcart"> <FaShoppingCart /></Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopNav;
