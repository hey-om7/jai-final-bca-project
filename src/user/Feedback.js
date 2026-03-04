import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Feedback() {
    const [review, setReview] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            const userInfoRaw = localStorage.getItem("userInfo");
            const userInfo = userInfoRaw ? JSON.parse(userInfoRaw) : null;

            if (!userInfo || !userInfo.token) {
                alert("You must be logged in to submit feedback.");
                setLoading(false);
                navigate('/login');
                return;
            }

            const response = await fetch('http://localhost:5001/api/feedbacks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userInfo.token}`,
                },
                body: JSON.stringify({ review }),
            });

            if (response.ok) {
                setMessage({ type: 'success', text: 'Thank you for your feedback!' });
                setReview('');
            } else {
                const errorData = await response.json();
                setMessage({ type: 'error', text: `Failed to submit: ${errorData.message}` });
            }
        } catch (error) {
            console.error("Error submitting feedback:", error);
            setMessage({ type: 'error', text: 'An error occurred while submitting feedback.' });
        } finally {
            setLoading(false);
        }
    };

    const containerStyle = {
        maxWidth: '600px',
        margin: '50px auto',
        padding: '30px',
        background: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        fontFamily: '"Inter", "Segoe UI", sans-serif',
    };

    const titleStyle = {
        fontSize: '2rem',
        color: '#2d3748',
        marginBottom: '8px',
        fontWeight: '700',
    };

    const subtitleStyle = {
        color: '#718096',
        marginBottom: '25px',
        fontSize: '1.05rem',
    };

    const textareaStyle = {
        width: '100%',
        padding: '15px',
        borderRadius: '8px',
        border: '1px solid #e2e8f0',
        minHeight: '150px',
        fontSize: '1rem',
        marginBottom: '20px',
        resize: 'vertical',
        fontFamily: 'inherit',
        boxSizing: 'border-box',
        transition: 'border-color 0.2s',
    };

    const buttonStyle = {
        background: '#4299e1',
        color: 'white',
        padding: '12px 24px',
        border: 'none',
        borderRadius: '6px',
        fontSize: '1rem',
        fontWeight: '600',
        cursor: loading ? 'not-allowed' : 'pointer',
        width: '100%',
        transition: 'background-color 0.2s',
    };

    const messageStyle = (type) => ({
        padding: '12px',
        borderRadius: '6px',
        marginBottom: '20px',
        background: type === 'success' ? '#c6f6d5' : '#fed7d7',
        color: type === 'success' ? '#22543d' : '#822727',
        border: `1px solid ${type === 'success' ? '#9ae6b4' : '#feb2b2'}`,
    });

    return (
        <div style={{ minHeight: '80vh', padding: '20px', background: '#f7fafc', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
            <div style={containerStyle}>
                <h1 style={titleStyle}>We value your feedback</h1>
                <p style={subtitleStyle}>Let us know how we can improve your experience.</p>

                {message && (
                    <div style={messageStyle(message.type)}>
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <textarea
                        style={textareaStyle}
                        placeholder="Type your feedback, feature requests, or bug reports here..."
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        required
                        disabled={loading}
                    />
                    <button
                        type="submit"
                        style={buttonStyle}
                        disabled={loading}
                    >
                        {loading ? 'Submitting...' : 'Submit Feedback'}
                    </button>
                </form>
            </div>
        </div>
    );
}
