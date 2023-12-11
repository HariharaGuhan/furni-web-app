import React ,{useEffect}from "react";
import envelop from "../Assets/envelope-outline.svg";
import { Link as RouterLink, animateScroll as scroll } from "react-scroll";
import "../css/footer.css";
import { FiMail } from "react-icons/fi";
import {
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  useEffect(() => {
    // Update the current year dynamically
    document.getElementById("currentYear").innerText = new Date().getFullYear();
  }, []);
  return (
    <div>
      <footer className="footer-section">
        <div className="container relative">
          
           

          <div className="row">
            <div className="col-lg-8">
              <div className="subscription-form">
                <h3 className="d-flex align-items-center">
                  <span className="me-1">
                    <img src={envelop} alt="Image" className="img-fluid" />
                  </span>
                  <span>Subscribe to Newsletter</span>
                </h3>

                <form action="#" className="row g-3">
                  <div className="col-auto">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="col-auto">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-primary">
                      <span classNameName="fa-icon">
                        <FaPaperPlane />
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="row g-5 mb-5">
        <div className="col-lg-4">
          <div className="mb-4 footer-logo-wrap">
            <a href="#" className="footer-logo">
              Furni<span>.</span>
            </a>
          </div>
          <p className="mb-4">
            Furniture is also used to hold objects at a convenient height for work (as horizontal surfaces above the ground, such as tables and desks), or to store things (e.g., cupboards, shelves, and drawers). Furniture can be a product of design and can be considered a form of decorative art.
          </p>

          <ul className="list-unstyled custom-social">
            <li>
              <a href="mailto:hariharan08071999@gmail.com">
                <span>
                  <FiMail />
                </span>
              </a>
            </li>
            <li>
              <a href="https://github.com/HariharaGuhan">
                <span>
                  <FaGithub />
                </span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/dhoni_hari_guhan/">
                <span className="">
                  <FaInstagram />
                </span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/hari-haran-414b2a212/">
                <span className="">
                  <FaLinkedin />
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="col-lg-8">
          <div className="row links-wrap">
            <div className="col-md-6 col-lg-3">
              <ul className="list-unstyled">
                <li>
                 <Link to="/home"><a href="">Home</a></Link> 
                </li>
                <li>
                  <Link to="/product"><a href="">Shop</a></Link>
                </li>
               
                <li>
                 <Link to="/contact"> <a href="#">Contact us</a></Link>
                </li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-3">
              <ul className="list-unstyled">
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Knowledge base</a>
                </li>
                <li>
                  <a href="#">Live chat</a>
                </li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-3">
              <ul className="list-unstyled">
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Our team</a>
                </li>
                <li>
                  <a href="#">Leadership</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

          <div className="border-top copyright">
      <div className="container pt-4">
        <div className="row">
          <div className="col-lg-6">
            <p className="mb-2 text-center text-lg-start">
              &copy; <span id="currentYear"></span> All Rights Reserved.
              <br />Designed with ❤️ by <a href="https://twitter.com/Hari_Guhan" target="_blank" rel="noopener noreferrer">@Hari_Guhan</a>
            </p>
          </div>

          <div className="col-lg-6 text-center text-lg-end">
            <ul className="list-inline">
              <li className="list-inline-item me-4">
                <a href="#" className="text-decoration-none">Terms &amp; Conditions</a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-decoration-none">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
        </div>
      </footer>
    </div>
  );
}
