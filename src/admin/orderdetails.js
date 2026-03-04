import { useState, useEffect } from "react";
import { useSearchParams, useNavigate, NavLink } from "react-router-dom";

export default function OrderDetails() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("id");
  const navigate = useNavigate();

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
      <div>
        <h2>Order Details</h2>
        <p>Loading...</p>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div>
        <h2>Order Details</h2>
        <p style={{ color: "red" }}>Error: {error || "Order not found"}</p>
        <button className="action-btn edit-btn" onClick={() => navigate(-1)}>Back</button>
      </div>
    );
  }

  const sectionStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px"
  };

  const rowStyle = {
    display: "flex",
    borderBottom: "1px solid #dee2e6",
    padding: "12px 10px"
  };

  const labelStyle = {
    fontWeight: "600",
    width: "200px",
    color: "#495057"
  };

  const valueStyle = {
    color: "#212529"
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h2>Order Details: {order._id}</h2>
        <button className="add-btn" onClick={() => navigate(-1)} style={{ marginBottom: 0 }}>
          Back to Orders
        </button>
      </div>

      <div style={sectionStyle}>
        <h3 style={{ marginBottom: "15px", borderBottom: "2px solid #e9ecef", paddingBottom: "10px", color: "#343a40" }}>User Details</h3>
        <div style={rowStyle}>
          <span style={labelStyle}>Name</span>
          <span style={valueStyle}>{order.userId ? order.userId.name : "Unknown User"}</span>
        </div>
        <div style={rowStyle}>
          <span style={labelStyle}>Email</span>
          <span style={valueStyle}>{order.userId ? order.userId.email : "N/A"}</span>
        </div>
      </div>

      <div style={sectionStyle}>
        <h3 style={{ marginBottom: "15px", borderBottom: "2px solid #e9ecef", paddingBottom: "10px", color: "#343a40" }}>Order Summary</h3>
        <div style={rowStyle}>
          <span style={labelStyle}>Order Date</span>
          <span style={valueStyle}>{new Date(order.createdAt).toLocaleString()}</span>
        </div>
        <div style={rowStyle}>
          <span style={labelStyle}>Total Price</span>
          <span style={{ fontWeight: "bold", color: "#28a745" }}>₹{order.totalPrice}</span>
        </div>
      </div>

      <div style={sectionStyle}>
        <h3 style={{ marginBottom: "15px", borderBottom: "2px solid #e9ecef", paddingBottom: "10px", color: "#343a40" }}>Product Details</h3>
        {order.productId ? (
          <div>
            <div style={rowStyle}>
              <span style={labelStyle}>Product Name</span>
              <span style={valueStyle}>{order.productId.title}</span>
            </div>
            <div style={rowStyle}>
              <span style={labelStyle}>Category</span>
              <span style={valueStyle}>{order.productId.category || "N/A"}</span>
            </div>
            <div style={rowStyle}>
              <span style={labelStyle}>Quantity</span>
              <span style={valueStyle}>{order.quantity}</span>
            </div>
            <div style={rowStyle}>
              <span style={labelStyle}>Price per unit</span>
              <span style={valueStyle}>₹{order.productId.price}</span>
            </div>
          </div>
        ) : (
          <p>No product details available.</p>
        )}
      </div>
    </div>
  );
}
