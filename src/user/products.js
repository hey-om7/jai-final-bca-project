import "./products.css";
import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export function ProductCards() {
  const { state } = useLocation();

  // Guard clause if state is missing
  if (!state) {
    return (
      <div className="cards-container" style={{ display: 'block', textAlign: 'center', paddingTop: '100px' }}>
        <h2>No products found.</h2>
        <Link to="/categories" className="view-details-btn" style={{ display: 'inline-block', marginTop: '20px' }}>
          <FaArrowLeft style={{ marginRight: '8px' }} /> Back to Collections
        </Link>
      </div>
    );
  }

  // Normalize product data from flattened state to array
  const products = [
    {
      image: state.image,
      title: state.title,
      price: state.price,
      description: state.description
    },
    {
      image: state.image2,
      title: state.title2,
      price: state.price2,
      description: state.description2
    },
    {
      image: state.image3,
      title: state.title3,
      price: state.price3,
      description: state.description3
    }
  ];

  return (
    <div>
      <div style={{ padding: '20px 20px 0', maxWidth: '1200px', margin: '0 auto' }}>
        <Link to="/categories" style={{ textDecoration: 'none', color: '#6c757d', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '500' }}>
          <FaArrowLeft /> Back to Collections
        </Link>
      </div>

      <div className="cards-container">
        {products.map((product, index) => (
          <Link
            key={index}
            to="/product_detail"
            className="remove_link"
            state={product}
          >
            <div className="product-card">
              <div className="product-card-image-wrapper">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-card-content">
                <h3>{product.title}</h3>
                <div className="price">₹{product.price}</div>
                <p>{product.description && product.description.length > 100
                  ? product.description.substring(0, 100) + '...'
                  : product.description}</p>
                <button className="view-details-btn">View Details</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
