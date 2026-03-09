import { useState } from "react";
import { categories } from "../user/data";

export function ProductEdit({ onCancel }) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("100% Cotton");
    const [categoryId, setCategoryId] = useState(1);
    const [customId, setCustomId] = useState(""); // For the custom 'id' field

    const handleCategoryIdChange = (e) => {
        const newId = Number(e.target.value);
        setCategoryId(newId);

        const selectedCat = categories.find(cat => cat.id === newId);
        if (selectedCat) {
            setCategory(selectedCat.title);
        } else {
            setCategory("Unknown Category");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userInfo = JSON.parse(localStorage.getItem("userInfo"));
            const response = await fetch('http://localhost:5001/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`,
                },
                body: JSON.stringify({
                    id: Number(customId),
                    title,
                    price: Number(price),
                    image,
                    description,
                    category,
                    categoryId: Number(categoryId)
                }),
            });

            if (response.ok) {
                onCancel(); // Go back to list
            } else {
                alert("Failed to create product");
            }
        } catch (error) {
            console.error("Error creating product:", error);
        }
    };

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit} style={{ maxWidth: '500px' }}>
                <div className="form-group">
                    <label>Product ID (Unique Number)</label>
                    <input type="number" value={customId} onChange={(e) => setCustomId(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Image URL</label>
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required style={{ width: '100%', padding: '8px' }}></textarea>
                </div>
                <div className="form-group">
                    <label>Category (1-4)</label>
                    <input type="number" value={categoryId} onChange={handleCategoryIdChange} required />
                </div>

                <button type="submit" className="login-btn">Create Product</button>
                <button type="button" onClick={onCancel} style={{ marginTop: '10px', background: '#6c757d', color: 'white', border: 'none', padding: '10px', width: '100%', cursor: 'pointer' }}>Cancel</button>
            </form>
        </div>
    );
}
