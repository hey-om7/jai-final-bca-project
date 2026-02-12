
import { useState } from "react";
import "./product_detail.css";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "./data";

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === parseInt(productId));

  // If product not found (or data issue), fallback or loading
  if (!product) {
    return <div className="product-section"><h2>Product not found</h2></div>;
  }

  // TODO: Add support for multiple images in data.js if needed, 
  // for now using the main image and placeholders or cloning the main image
  const images = [product.image, product.image, product.image];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="product-section">
      <div className="image-slider">
        <button className="arrow left" onClick={prev}>❮</button>
        <img src={images[index]} alt={product.title} />
        <button className="arrow right" onClick={next}>❯</button>
      </div>

      <h1 className="product-title">{product.title}</h1>
      <h2 className="product-price">₹{product.price}</h2>
      <p className="product-desc">{product.description}</p>

      <button
        className="buy-now"
        onClick={() =>
          navigate("/checklogin", {
            state: {
              price: product.price,
              title: product.title,
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
