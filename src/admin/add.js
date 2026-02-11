import "./add.css";

export default function Add() {
  return (
    <div className="add-product-wrapper">
      <div className="add-product-card">
        <h1>Add Product</h1>

        <form className="add-product-form">
          {/* Upload Image */}
          <label>Upload Image</label>
          <input type="file" />

          {/* Product Name */}
          <label>Product Name</label>
          <input type="text" placeholder="Enter product name" />

          {/* Price */}
          <label>Price</label>
          <input type="number" placeholder="Enter price" />

          {/* Description */}
          <label>Description</label>
          <textarea placeholder="Enter product description"></textarea>

          {/* Radio Buttons */}
          <label>Product Type</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="type" /> 100% Cotton
            </label>

            <label>
              <input type="radio" name="type" /> Mixed Towel
            </label>

            <label>
              <input type="radio" name="type" /> Carbon Towel
            </label>

            <label>
              <input type="radio" name="type" /> ABC Towel
            </label>
          </div>

          {/* Button */}
          <button type="button" className="add-btn">
            ADD
          </button>
        </form>
      </div>
    </div>
  );
}
