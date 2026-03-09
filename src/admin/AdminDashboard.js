import { useState, useEffect } from "react";
import { UserList } from "./UserList";
import { ProductList } from "./ProductList";
import { ProductEdit } from "./ProductEdit";
import Orders from "./orders";
import Feedbacks from "./Feedbacks";
import { useNavigate } from "react-router-dom";
import "./admin.css";

export function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("products");
    const [editingProduct, setEditingProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (!userInfo || !userInfo.isAdmin) {
            navigate("/");
        }
    }, [navigate]);

    return (
        <div className="admin-dashboard">
            <div className="admin-sidebar">
                <h2>Admin Panel</h2>
                {/* <button
                    className={activeTab === "users" ? "active" : ""}
                    onClick={() => { setActiveTab("users"); setEditingProduct(null); }}
                >
                    Users
                </button> */}
                <button
                    className={activeTab === "products" ? "active" : ""}
                    onClick={() => { setActiveTab("products"); setEditingProduct(null); }}
                >
                    Products
                </button>
                <button
                    className={activeTab === "orders" ? "active" : ""}
                    onClick={() => { setActiveTab("orders"); setEditingProduct(null); }}
                >
                    Orders
                </button>
                <button
                    className={activeTab === "feedbacks" ? "active" : ""}
                    onClick={() => { setActiveTab("feedbacks"); setEditingProduct(null); }}
                >
                    Feedbacks
                </button>
            </div>
            <div className="admin-content">
                {activeTab === "users" && <UserList />}
                {activeTab === "products" && !editingProduct && (
                    <ProductList onEdit={(product) => setEditingProduct(product)} />
                )}
                {activeTab === "products" && editingProduct && (
                    <ProductEdit product={editingProduct} onCancel={() => setEditingProduct(null)} />
                )}
                {activeTab === "orders" && <Orders />}
                {activeTab === "feedbacks" && <Feedbacks />}
            </div>
        </div>
    );
}
