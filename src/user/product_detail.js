
import { useState, useEffect } from "react";
import "./product_detail.css";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Note: Our API expects the numeric 'id' field, NOT the MongoDB _id
        const response = await fetch(`http://localhost:5001/api/products/${productId}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  // If product not found (or data issue), fallback or loading
  if (loading) {
    return <div className="product-section"><h2>Loading...</h2></div>;
  }

  if (!product) {
    return <div className="product-section"><h2>Product not found</h2></div>;
  }

  // TODO: Add support for multiple images in data.js if needed, 
  // for now using the main image and placeholders or cloning the main image
  const images = [product.image, product.image, product.image];

  const handleBuyNow = async () => {
    try {
      const orderData = {
        orderItems: [
          {
            title: product.title,
            qty: 1,
            image: product.image,
            price: product.price,
            product: product._id
          }
        ],
        shippingAddress: {
          address: '123 Test St',
          city: 'Test City',
          postalCode: '123456',
          country: 'Test Country'
        },
        paymentMethod: 'PayPal',
        itemsPrice: product.price,
        taxPrice: 0,
        shippingPrice: 0,
        totalPrice: product.price
      };

      const response = await fetch('http://localhost:5001/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        navigate("/order-completed");
      } else {
        alert("Failed to place order");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Error placing order");
    }
  };

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
        onClick={handleBuyNow}
      >
        Buy Now
      </button>
    </div>
  );
}

export default ProductDetail;
