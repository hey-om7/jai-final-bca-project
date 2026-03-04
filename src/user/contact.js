import "./contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export function ContactUs() {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="contact-hero">
                    <h1 className="contact-title">Get in Touch</h1>
                    <p className="contact-subtitle">
                        We'd love to hear from you. Reach out to us for any inquiries or support.
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Email Support */}
                    <div className="contact-card">
                        <div className="icon-wrapper">
                            <FaEnvelope />
                        </div>
                        <h3>Email Us</h3>
                        <p>
                            For general inquiries and support:
                        </p>
                        <a href="mailto:jambarkar1@gmail.com" className="contact-link">
                            jambarkar1@gmail.com
                        </a>
                        <p className="secondary-text">
                            <b>For orders: <a href="mailto:jambarkar1@gmail.com">jambarkar1@gmail.com</a></b>
                        </p>
                    </div>

                    {/* Phone Support */}
                    <div className="contact-card">
                        <div className="icon-wrapper">
                            <FaPhone />
                        </div>
                        <h3>Call Us</h3>
                        <p>
                            Monday - Friday, 9am - 6pm EST
                        </p>
                        <a href="tel:+919850680630" className="contact-link">
                            +91 98506 80630
                        </a>
                    </div>

                    {/* Office Address */}
                    <div className="contact-card">
                        <div className="icon-wrapper">
                            <FaMapMarkerAlt />
                        </div>
                        <h3>Visit Us</h3>
                        <p>
                            Ambarkar Industries
                        </p>
                        <p className="address-text">
                            Akkalkot Road<br />
                            Solapur, Maharashtra 413001
                        </p>
                    </div>
                </div>

                <div className="contact-footer">
                    <p>
                        Have a specific question? Check our <a href="/about">About Us</a> page to learn more.
                    </p>
                </div>
            </div>
        </section>
    );
}
