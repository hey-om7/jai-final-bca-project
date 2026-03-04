import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./orderdetails.css";

export default function OrderDetails() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("id");

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const userInfoRaw = localStorage.getItem("userInfo");
        const userInfo = userInfoRaw ? JSON.parse(userInfoRaw) : null;
        const response = await fetch(`http://localhost:5001/api/orders/${orderId}`, {
          headers: {
            Authorization: `Bearer ${userInfo?.token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch order details: ${response.status}`);
        }

        const data = await response.json();
        setOrder(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching order:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    if (orderId) {
      fetchOrderDetails();
    } else {
      setError("No order ID provided");
      setLoading(false);
    }
  }, [orderId]);

  if (loading) {
    return (
      <div className="order-details-page">
        <div className="order-details-card">
          <h1>Order Details</h1>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="order-details-page">
        <div className="order-details-card">
          <h1>Order Details</h1>
          <p className="error-text">Error: {error || "Order not found"}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="order-details-page">
      <div className="order-details-card">
        <h1>Order Details</h1>

        {/* USER DETAILS */}
        <div className="details-section">
          <h2>User Details</h2>

          <div className="detail-row">
            <span className="label">Name</span>
            <span className="value">{order.userId ? order.userId.name : "Unknown User"}</span>
          </div>

          <div className="detail-row">
            <span className="label">Email</span>
            <span className="value">{order.userId ? order.userId.email : "N/A"}</span>
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div className="details-section">
          <h2>Order Summary</h2>

          <div className="detail-row">
            <span className="label">Order Date</span>
            <span className="value">{new Date(order.createdAt).toLocaleString()}</span>
          </div>

          <div className="detail-row">
            <span className="label">Total Price</span>
            <span className="value">₹{order.totalPrice}</span>
          </div>
        </div>

        {/* PRODUCT DETAILS */}
        <div className="details-section">
          <h2>Product Details</h2>

          {order.productId ? (
            <div className="product-item-card" style={{ marginBottom: "1rem", paddingBottom: "1rem" }}>
              <div className="detail-row">
                <span className="label">Product Name</span>
                <span className="value">{order.productId.title}</span>
              </div>
              <div className="detail-row">
                <span className="label">Category</span>
                <span className="value">{order.productId.category || "N/A"}</span>
              </div>
              <div className="detail-row">
                <span className="label">Quantity</span>
                <span className="value">{order.quantity}</span>
              </div>
              <div className="detail-row">
                <span className="label">Price per unit</span>
                <span className="value">₹{order.productId.price}</span>
              </div>
            </div>
          ) : (
            <p>No product details available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
