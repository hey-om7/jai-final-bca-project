import { NavLink } from "react-router-dom";
import "./orders.css";

export default function Orders() {
  return (
    <div className="orders-page">
      <h1 className="orders-title">Orders</h1>

      <div className="orders-container">
        <NavLink to="/orderdetails" className="order-link">
          <div className="order-card">
            <h2>Order for JAI</h2>
            <p>
              Date of Order: <span>12 Feb 2026</span>
            </p>
          </div>
        </NavLink>

        <NavLink to="/orderdetails" className="order-link">
          <div className="order-card">
            <h2>Order for OM</h2>
            <p>
              Date of Order: <span>14 Feb 2026</span>
            </p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
