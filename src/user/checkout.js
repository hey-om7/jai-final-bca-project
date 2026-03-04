import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './checkout.css';

export default function Checkout() {
    const { state } = useLocation();
    const navigate = useNavigate();

    const [address, setAddress] = useState(null);
    const [loadingAddress, setLoadingAddress] = useState(true);
    const [placing, setPlacing] = useState(false);
    const [quantity, setQuantity] = useState(1);

    // If user lands here directly without product data, redirect away
    useEffect(() => {
        if (!state || !state.product) {
            navigate('/categories');
            return;
        }

        const fetchAddress = async () => {
            try {
                const userInfoRaw = localStorage.getItem('userInfo');
                const userInfo = userInfoRaw ? JSON.parse(userInfoRaw) : null;

                if (!userInfo || !userInfo.token) {
                    navigate('/login');
                    return;
                }

                const res = await fetch('http://localhost:5001/api/users/address', {
                    headers: { Authorization: `Bearer ${userInfo.token}` },
                });

                if (res.ok) {
                    const data = await res.json();
                    setAddress(data);
                }
            } catch (err) {
                console.error('Error fetching address:', err);
            } finally {
                setLoadingAddress(false);
            }
        };

        fetchAddress();
    }, [state, navigate]);

    const handlePlaceOrder = async () => {
        setPlacing(true);
        try {
            const userInfoRaw = localStorage.getItem('userInfo');
            const userInfo = userInfoRaw ? JSON.parse(userInfoRaw) : null;

            const totalPrice = quantity * state.product.price;
            const orderData = {
                productId: state.product._id,
                quantity,
                totalPrice,
            };

            const response = await fetch('http://localhost:5001/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`,
                },
                body: JSON.stringify(orderData),
            });

            if (response.ok) {
                navigate('/order-completed');
            } else {
                const errorData = await response.json();
                alert(`Failed to place order: ${errorData.message}`);
                setPlacing(false);
            }
        } catch (error) {
            console.error('Error placing order:', error);
            alert('An error occurred. Please try again.');
            setPlacing(false);
        }
    };

    const product = state?.product;

    return (
        <div className="checkout-page">
            <div className="checkout-container">
                <h1 className="checkout-title">Review Your Order</h1>
                <p className="checkout-subtitle">Please review your order details before confirming.</p>

                <div className="checkout-grid">
                    {/* ORDER SUMMARY */}
                    <div className="checkout-card">
                        <h3>Order Summary</h3>
                        <p className="checkout-product-name">{product?.title}</p>

                        <div className="checkout-row">
                            <span>Price per unit</span>
                            <span>₹{product?.price}</span>
                        </div>
                        <div className="checkout-row">
                            <span>Quantity</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <button
                                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                    style={{ width: '28px', height: '28px', border: '1px solid #ddd', borderRadius: '50%', background: '#f5f5f5', cursor: 'pointer', fontWeight: '700', fontSize: '1rem', lineHeight: 1 }}
                                >−</button>
                                <span style={{ fontWeight: '600', minWidth: '20px', textAlign: 'center' }}>{quantity}</span>
                                <button
                                    onClick={() => setQuantity(q => q + 1)}
                                    style={{ width: '28px', height: '28px', border: '1px solid #ddd', borderRadius: '50%', background: '#f5f5f5', cursor: 'pointer', fontWeight: '700', fontSize: '1rem', lineHeight: 1 }}
                                >+</button>
                            </div>
                        </div>
                        <div className="checkout-row checkout-total">
                            <span>Total</span>
                            <span>₹{product ? product.price * quantity : 0}</span>
                        </div>
                    </div>

                    {/* SHIPPING ADDRESS */}
                    <div className="checkout-card">
                        <h3>Shipping Address</h3>
                        {loadingAddress ? (
                            <p className="address-line">Loading your address...</p>
                        ) : address ? (
                            <div className="address-line">
                                <strong>{address.addressLine}</strong>
                                {address.city}, {address.pincode}<br />
                                {address.country}
                            </div>
                        ) : (
                            <p className="no-address-note">
                                No address on record. Please update your profile or register again with address details.
                            </p>
                        )}
                    </div>
                </div>

                <div className="checkout-action">
                    <button
                        className="place-order-btn"
                        onClick={handlePlaceOrder}
                        disabled={placing || !product}
                    >
                        {placing ? 'Placing Order...' : 'Place Order'}
                    </button>
                </div>
            </div>
        </div>
    );
}
