import { useState, useEffect } from "react";

export default function Feedbacks() {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const userInfoRaw = localStorage.getItem("userInfo");
                const userInfo = userInfoRaw ? JSON.parse(userInfoRaw) : null;

                const response = await fetch("http://localhost:5001/api/feedbacks", {
                    headers: {
                        Authorization: `Bearer ${userInfo?.token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch feedbacks: ${response.status}`);
                }

                const data = await response.json();
                setFeedbacks(data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching feedbacks:", err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchFeedbacks();
    }, []);

    if (loading) {
        return (
            <div>
                <h2>Loading Feedbacks...</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <h2>Dashboard Error</h2>
                <p>Error: {error}</p>
            </div>
        );
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h2>User Feedbacks</h2>
            </div>

            {feedbacks.length === 0 ? (
                <p>No feedbacks submitted yet.</p>
            ) : (
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Feedback ID</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Review</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedbacks.map((f) => (
                            <tr key={f._id}>
                                <td>{f._id}</td>
                                <td>{f.user ? f.user.name : "Anonymous"}</td>
                                <td>{f.user ? f.user.email : "N/A"}</td>
                                <td style={{ maxWidth: '300px', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{f.review}</td>
                                <td>{new Date(f.createdAt).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
