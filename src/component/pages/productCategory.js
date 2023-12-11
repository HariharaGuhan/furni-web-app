import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import bg from "../Assets/bg1.webp";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../css/home.css";

export default function ProductCategory({ category, data }) {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>{category}</h1>
              </div>
            </div>
            <div className="col-lg-7">
              <img src={bg} className="image-fluid responsive" />
            </div>
          </div>
        </div>
      </div>

      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {data.map((item) => (
              <div key={item.id} className="col-12 col-md-4 col-lg-3 mb-5">
                <a className="product-item" href="#">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid product-thumbnail"
                  />
                  <h3 className="product-title">{item.title}</h3>
                  <strong className="product-price">${item.price}</strong>
                  <div>
                    <Link to={`/details/${item.id}`}>
                      <button className="btn btn-primary">Buy Now</button>
                    </Link>
                  </div>
                  {/* <span className="icon-cross">
                    <img src={cross} alt="cross" className="img-fluid" />
                  </span> */}
                  <span className="icon-favorite mt-5">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className=" cardFavIcon mt-5"
                    />
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
