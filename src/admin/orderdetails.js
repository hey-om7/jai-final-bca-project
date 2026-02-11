import "./orderdetails.css";

export default function OrderDetails() {
  return (
    <div className="order-details-page">
      <div className="order-details-card">
        <h1>Order Details</h1>

        {/* USER DETAILS */}
        <div className="details-section">
          <h2>User Details</h2>

          <div className="detail-row">
            <span className="label">Name</span>
            <span className="value placeholder"></span>
          </div>

          <div className="detail-row">
            <span className="label">Email</span>
            <span className="value placeholder"></span>
          </div>

          <div className="detail-row">
            <span className="label">Address</span>
            <span className="value placeholder"></span>
          </div>

          <div className="detail-row">
            <span className="label">Phone No</span>
            <span className="value placeholder"></span>
          </div>

          <div className="detail-row">
            <span className="label">City</span>
            <span className="value placeholder"></span>
          </div>
        </div>

        {/* PRODUCT DETAILS */}
        <div className="details-section">
          <h2>Product Details</h2>

          <div className="detail-row">
            <span className="label">Selected Item</span>
            <span className="value placeholder"></span>
          </div>

          <div className="detail-row">
            <span className="label">Selected Product</span>
            <span className="value placeholder"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
