import React from "react";
import { useState, useEffect } from "react";
import "../css/home.css";
import { Carousel } from "react-bootstrap";
import couch from "../Assets/couch.png";
import { Link } from "react-router-dom";
import truck from "../Assets/truck.svg";
import bag from "../Assets/bag.svg";
import support from "../Assets/support.svg";
import retorn from "../Assets/return.svg";
import choose from "../Assets/why-choose-us-img.jpg";
import productData from "./product.json";
export default function Home() {
  const products = productData;
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCategoryIndex(
        (prevIndex) => (prevIndex + 1) % Math.ceil(products.length / 3)
      );
    }, 900000); // 15 minutes in milliseconds

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [products.length]);

  const getCategoryProducts = () => {
    const startIndex = currentCategoryIndex * 3;
    return products.slice(startIndex, startIndex + 3);
  };

  const categories = [
    ...new Set(productData.map((product) => product.category)),
  ];

  return (
    <div>
      {/* hero */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>
                  Modern Interior <span clsas="d-block">Design Studio</span>
                </h1>
                <p className="mb-4">
                  Furniture is also used to hold objects at a convenient height
                  for work (as horizontal surfaces above the ground, such as
                  tables and desks), or to store things (e.g., cupboards,
                  shelves, and drawers). Furniture can be a product of design
                  and can be considered a form of decorative art.
                </p>
                <p>
                  <Link to="/product">
                    {" "}
                    <a href="" className="btn btn-secondary me-2">
                      Shop Now
                    </a>
                  </Link>
                  <Link to="/product">
                    {" "}
                    <a href="#" className="btn btn-white-outline">
                      Explore
                    </a>
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src={couch} class="img-fluid mdf" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Start Product Section --> */}

      <div className="horizontal-carousel text-dark ">
        <h4 className="text-center col-lg-12 ">New Arrivals</h4>
        <Carousel className="d-md-block">
          {categories.map((category) => {
            const categoryProducts = productData.filter(
              (product) => product.category === category
            );

            return (
              <Carousel.Item key={category}>
                {categoryProducts.slice(0, 1).map((product) => (
                  <div key={product.id} className="text-center ">
                    <img
                      className="d-block w-50 mx-auto"
                      src={product.image}
                      alt={product.title}
                    />
                    <Carousel.Caption className="text-success">
                      <h3>{product.title}</h3>
                      <p>Price: ${product.price}</p>
                      <p>
                        <Link to={`/details/${product.id}`}>
                          <button className="btn btn-primary">Read More</button>
                        </Link>
                      </p>
                    </Carousel.Caption>
                  </div>
                ))}
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>

      <div className="product-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">Best Seller</h2>
              <p className="mb-4">
                Furniture is also used to hold objects at a convenient height
                for work (as horizontal surfaces above the ground, such as
                tables and desks), or to store things (e.g., cupboards, shelves,
                and drawers). Furniture can be a product of design and can be
                considered a form of decorative art.{" "}
              </p>
              <p>
                <Link to="/product">
                  {" "}
                  <a className="btn">Explore</a>
                </Link>
              </p>
            </div>
            {getCategoryProducts().map((product) => (
              <div
                key={product.id}
                className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0"
              >
                <a className="product-item" href="cart.html">
                  <img
                    src={product.image}
                    className="img-fluid product-thumbnail"
                    alt={product.title}
                  />
                  <h3 className="product-title">{product.title}</h3>
                  <strong className="product-price">{`$${product.price.toFixed(
                    2
                  )}`}</strong>
                  {/* Additional product details as needed */}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 col-12 col-md-6">
              <h2 className="section-title">Why Choose Us</h2>
              <p>
                We always go that extra mile to make sure the furniture <br />
                we supply is made ethically, with high-quality materials.
              </p>
            </div>
            <div className="col-lg-4 mt-5 col-12">
              <div className="img-wrap  ">
                <img src={choose} alt="Image" className="img-fluid w-75 " />
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12 col-lg-6 col-md-6">
              <div className="feature">
                <div className="icon">
                  <img src={truck} alt="Image" className="imf-fluid" />
                </div>
                <h3>Fast &amp; Free Shipping</h3>
                <p>
                  Free shipping is a marketing and sales tactic that is
                  primarily geared toward consumers who shop online. By
                  eliminating shipping costs on eligible items, online retailers
                  incentivize customers to purchase those products. Similar
                  tactics include offering free returns, coupons, and discount
                  codes.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6">
              <div className="feature">
                <div className="icon">
                  <img src={bag} alt="Image" className="imf-fluid" />
                </div>
                <h3>Easy to Shop</h3>
                <p>
                  furniture, household equipment, usually made of wood, metal,
                  plastics, marble, glass, fabrics, or related materials and
                  having a variety of different purposes
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6">
              <div className="feature">
                <div className="icon">
                  <img src={support} alt="Image" className="imf-fluid" />
                </div>
                <h3>24/7 Support</h3>
                <p>
                  24/7 customer support is a model where customers can get their
                  issues resolved anytime they need assistance. This is the
                  support that is available 24 hours a day and 7 days a week.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6">
              <div className="feature">
                <div className="icon">
                  <img src={retorn} alt="Image" className="imf-fluid" />
                </div>
                <h3>Free Returns</h3>
                <p>
                  If you are unhappy with your purchase [for any reason], we'll
                  be happy to return or exchange the product within [X days of
                  purchase] for [a full refund, an exchange, or store credit.]
                  To make a return: Items must be [unopened/unused/unworn] Items
                  must still be in their original packaging with all tags
                  attached.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
