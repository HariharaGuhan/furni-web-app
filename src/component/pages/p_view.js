import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import productData from "./product.json";
import '../css/product.css'

export default function Jsondata() {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = productData.find((p) => p.id === productId);
  const navigate = useNavigate();

  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = existingCart.find((item) => item.id === productId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    navigate("/addcart");
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
    
      
      <div className="container-fluid bg">
      <h3 className="top-text">Shopping cart</h3>
        <div className="row">
          <div className="col-lg-6">
            <img
              src={product.image}
              style={{ height: "400px" }}
              className="col-12"
              alt={product.title}
            />
            
          </div>
          <div className="col-lg-6">
            <h1 className="pt-4">{product.title}</h1>
            <p className="pt-2">{product.description}</p>
            <h3 className="pt-2">₹{product.price}</h3>
            <h4 className="pt-2 ">{product.category}</h4>
            <div className="row">
            <div className="mt-3 align">
                <button className="btn btn-warning col-lg-6" onClick={addToCart}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
