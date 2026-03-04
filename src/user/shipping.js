import "./aboutus.css";

export function Shipping() {
    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-hero">
                    <h1 className="about-title">Shipping Policy</h1>
                    <p className="about-subtitle">Everything you need to know about our delivery process.</p>
                </div>

                <div className="about-story" style={{ textAlign: 'left' }}>
                    <h3 style={{ marginBottom: "10px", color: "#1a1a1a" }}>Processing Time</h3>
                    <p>
                        All orders are processed within 1 to 2 business days (excluding weekends and holidays) after
                        receiving your order confirmation email. You will receive another notification when your order has shipped.
                    </p>

                    <h3 style={{ marginBottom: "10px", marginTop: "30px", color: "#1a1a1a" }}>Shipping Rates and Estimates</h3>
                    <p>
                        Shipping charges for your order will be calculated and displayed at checkout. We offer
                        standard and expedited shipping options across India.
                    </p>

                    <h3 style={{ marginBottom: "10px", marginTop: "30px", color: "#1a1a1a" }}>In-Store Pickup</h3>
                    <p>
                        You can skip the shipping fees with free local pickup at our main warehouse. After
                        placing your order and selecting local pickup at checkout, your order will be prepared
                        and ready for pick up within 1 to 2 business days.
                    </p>

                    <h3 style={{ marginBottom: "10px", marginTop: "30px", color: "#1a1a1a" }}>Order Tracking</h3>
                    <p>
                        When your order has shipped, you will receive an email notification from us which will
                        include a tracking number you can use to check its status. Please allow 48 hours for the
                        tracking information to become available.
                    </p>
                </div>
            </div>
        </section>
    );
}
