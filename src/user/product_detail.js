
import { useState } from "react";
import "./product_detail.css";

import one from "./one.jpeg";
import two from "./two.jpeg";
import three from "./three.jpeg";

import { useLocation, useNavigate } from "react-router-dom";

function ProductDetail() {
  const location = useLocation();
  const navigate = useNavigate();   // ✅ THIS WAS MISSING
  const state = location.state || {};

  const images = [one, two, three];
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);


  //const isLogin = false;



  return (
    <div className="product-section">
      <div className="image-slider">
        <button className="arrow left" onClick={prev}>❮</button>
        <img src={images[index]} alt="product" />
        <button className="arrow right" onClick={next}>❯</button>
      </div>

      <h1 className="product-title">{state.title}</h1>
      <h2 className="product-price">₹{state.price}</h2>
      <p className="product-desc">{state.description}</p>

      <button
        className="buy-now"
        onClick={() =>
  navigate("/checklogin", {
    state: {
      price: state.price,
      title: state.title,
    },
  })
}

      >
        Buy Now
      </button>
    </div>
  );
}

export default ProductDetail;


