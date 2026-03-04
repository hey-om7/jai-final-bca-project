import React from 'react';
import { useNavigate } from 'react-router-dom';
import './order_completed.css';
import Feedback from './Feedback';

function OrderCompleted() {
    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#f7fafc', minHeight: '100vh', paddingBottom: '50px' }}>
            <div className="order-completed-container" style={{ minHeight: 'auto', paddingTop: '40px' }}>
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

            <div style={{ width: '100%', maxWidth: '800px', marginTop: '-30px' }}>
                <Feedback />
            </div>
        </div>
    );
}

export default OrderCompleted;
