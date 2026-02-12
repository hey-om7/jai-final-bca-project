import React from 'react';
import { useNavigate } from 'react-router-dom';
import './order_completed.css';

function OrderCompleted() {
    const navigate = useNavigate();

    return (
        <div className="order-completed-container">
            <div className="order-card">
                <div className="success-icon-wrapper">
                    <div className="checkmark-circle">
                        <div className="checkmark"></div>
                    </div>
                </div>

                <h1 className="order-title">Order Successful!</h1>
                <p className="order-message">
                    Thank you for your purchase. Your order has been placed successfully and will be processed shortly.
                </p>

                <button className="continue-btn" onClick={() => navigate('/')}>
                    Continue Shopping
                </button>
            </div>
        </div>
    );
}

export default OrderCompleted;
