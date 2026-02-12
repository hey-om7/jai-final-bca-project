import "./products.css";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { products, categories } from "./data";

function ProductCards() {
  const { categoryId } = useParams();

  // Find category and its products
  const category = categories.find(c => c.id === parseInt(categoryId));
  const categoryProducts = products.filter(p => p.categoryId === parseInt(categoryId));

  if (!category) {
    return <div className="cards-container"><h2>Category not found</h2></div>;
  }

  return (
    <div>
      <div style={{ padding: '20px 20px 0', maxWidth: '1200px', margin: '0 auto' }}>
        <Link to="/categories" style={{ textDecoration: 'none', color: '#6c757d', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '500' }}>
          <FaArrowLeft /> Back to {category.title} Collections
        </Link>
      </div>

      <div className="cards-container">
        {categoryProducts.length > 0 ? (
          categoryProducts.map((product) => (
            <Link
              key={product.id}
              to={`/category/${categoryId}/product/${product.id}`}
              className="remove_link"
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
          ))
        ) : (
          <h2>No products found in this category.</h2>
        )}
      </div>
    </div>
  );
}

export default ProductCards;
