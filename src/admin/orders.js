import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./orders.css";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const userInfoRaw = localStorage.getItem("userInfo");
        const userInfo = userInfoRaw ? JSON.parse(userInfoRaw) : null;
        const response = await fetch("http://localhost:5001/api/orders", {
          headers: {
            Authorization: `Bearer ${userInfo?.token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch orders: ${response.status}`);
        }

        const data = await response.json();
        setOrders(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="orders-page">
        <h1 className="orders-title">Orders</h1>
        <p>Loading orders...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="orders-page">
        <h1 className="orders-title">Orders</h1>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <h1 className="orders-title">Orders</h1>

      <div className="orders-container">
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          orders.map((order) => (
            <NavLink
              key={order._id}
              to={`/orderdetails?id=${order._id}`}
              className="order-link"
            >
              <div className="order-card">
                <h2>Order for {order.userId ? order.userId.name : "Unknown User"}</h2>
                <p>
                  Date of Order:{" "}
                  <span>{new Date(order.createdAt).toLocaleDateString()}</span>
                </p>
                <p>
                  Product: <span>{order.productId ? order.productId.title : "Unknown Product"}</span>
                </p>
                <p>
                  Total Price: <span>₹{order.totalPrice}</span>
                </p>
              </div>
            </NavLink>
          ))
        )}
      </div>
    </div>
  );
}
