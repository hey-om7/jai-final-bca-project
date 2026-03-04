import "./aboutus.css";

export function FAQ() {
    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-hero">
                    <h1 className="about-title">Frequently Asked Questions</h1>
                    <p className="about-subtitle">Find answers to your most common questions below.</p>
                </div>

                <div className="values-section">
                    <div className="about-grid" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div className="about-card" style={{ textAlign: 'left' }}>
                            <h3>What are your business hours?</h3>
                            <p>Our customer service team is available Monday through Friday, 9:00 AM to 6:00 PM IST.</p>
                        </div>
                        <div className="about-card" style={{ textAlign: 'left' }}>
                            <h3>Do you offer international shipping?</h3>
                            <p>Currently, we only ship within India. We are working on expanding our reach in the future.</p>
                        </div>
                        <div className="about-card" style={{ textAlign: 'left' }}>
                            <h3>How can I track my order?</h3>
                            <p>Once your order is dispatched, you will receive a tracking link via email or SMS.</p>
                        </div>
                        <div className="about-card" style={{ textAlign: 'left' }}>
                            <h3>Can I cancel my order?</h3>
                            <p>Orders can only be canceled before they are dispatched. Please contact support immediately for cancellations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
