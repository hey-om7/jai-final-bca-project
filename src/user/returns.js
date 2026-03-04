import "./aboutus.css";

export function Returns() {
    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-hero">
                    <h1 className="about-title">Returns & Refunds</h1>
                    <p className="about-subtitle">Our commitment to your satisfaction.</p>
                </div>

                <div className="about-story" style={{ textAlign: 'left' }}>
                    <h3 style={{ marginBottom: "10px", color: "#1a1a1a" }}>Return Policy</h3>
                    <p>
                        We accept returns up to 7 days after delivery, if the item is unused and in its
                        original condition, and we will refund the full order amount minus the shipping costs
                        for the return.
                    </p>

                    <h3 style={{ marginBottom: "10px", marginTop: "30px", color: "#1a1a1a" }}>Damaged Items</h3>
                    <p>
                        In the event that your order arrives damaged in any way, please email us as soon as
                        possible with your order number and a photo of the item's condition. We address these on a
                        case-by-case basis but will try our best to work towards a satisfactory solution.
                    </p>

                    <h3 style={{ marginBottom: "10px", marginTop: "30px", color: "#1a1a1a" }}>Exchanges</h3>
                    <p>
                        We only replace items if they are defective or damaged. If you need to exchange it for the
                        same item, please contact our customer service team.
                    </p>

                    <h3 style={{ marginBottom: "10px", marginTop: "30px", color: "#1a1a1a" }}>Process for Returns</h3>
                    <p>
                        To initiate a return, please contact us. If your return is accepted, we’ll send you
                        instructions on how and where to send your package. Items sent back to us without first
                        requesting a return will not be accepted.
                    </p>
                </div>
            </div>
        </section>
    );
}
