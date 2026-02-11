import { useNavigate } from "react-router-dom";
import "./homepage.css";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="admin-container">
      <h1 className="admin-title">Welcome ADMIN</h1>

      <div className="admin-cards">
        <div
          className="admin-card"
          onClick={() => navigate("/add-products")}
        >
          <h2>ADD PRODUCTS</h2>
          <p>Add new items to your store</p>
        </div>

        <div
          className="admin-card"
          onClick={() => navigate("/view-orders")}
        >
          <h2>VIEW ORDERS</h2>
          <p>Check customer orders</p>
        </div>
      </div>
    </div>
  );
}

