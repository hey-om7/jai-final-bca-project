import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedin, FaArrowRight, FaStar } from "react-icons/fa";
import "./home_page.css";

export function HomePage() {
  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero-section" style={{ backgroundImage: "url(/hero_luxury_towel.png)" }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Wrap Yourself in <br /> <span className="highlight">Pure Luxury</span></h1>
          <p className="hero-subtitle">Experience the softness of premium cotton towels, crafted for your ultimate comfort and style.</p>
          <Link to="/categories" className="primary-btn">
            Shop Collection <FaArrowRight style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section">
        <div className="section-header">
          <h2>Why Choose Filament?</h2>
          <div className="divider"></div>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="image-wrapper">
              <img src="/feature_softness.png" alt="Ultra Soft Details" loading="lazy" />
            </div>
            <div className="card-content">
              <h3>Unmatched Softness</h3>
              <p>Woven from the finest long-staple cotton for a touch that is gentle on your skin.</p>
            </div>
          </div>

          <div className="feature-card reverse">
            <div className="image-wrapper">
              <img src="/feature_absorbent.png" alt="Superior Absorbency" loading="lazy" />
            </div>
            <div className="card-content">
              <h3>Superior Absorbency</h3>
              <p>Engineered to absorb water instantly, leaving you feeling fresh and dry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="showcase-section">
        <div className="showcase-content">
          <div className="text-content">
            <h2>The Premium Collection</h2>
            <p>Elevate your bathroom with our curated selection of colors and textures. Bringing the spa experience to your home.</p>

            <ul className="benefits-list">
              <li><FaStar className="star-icon" /> 100% Organic Cotton</li>
              <li><FaStar className="star-icon" /> Eco-friendly Dyeing</li>
              <li><FaStar className="star-icon" /> Durable & Long-lasting</li>
            </ul>

            <Link to="/categories" className="secondary-btn">View All Products</Link>
          </div>
          <div className="image-content">
            <img src="/product_stack.png" alt="Premium Towel Stack" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="brand-name">FILAMENT</span>
            <p>Redefining comfort, one towel at a time.</p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Company</h4>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="link-group">
              <h4>Support</h4>
              <Link to="/faq">FAQ</Link>
              <Link to="/shipping">Shipping</Link>
              <Link to="/returns">Returns</Link>
            </div>
          </div>

          <div className="footer-socials">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Filament Towels. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
