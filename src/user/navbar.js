import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";
import "./navbar.css";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${isHome ? "home-nav" : ""}`}>
      <div className="nav-container">
        {/* Left - Logo */}
        <div className="nav-left">
          <Link to="/" className="brand-logo">
            AmbarkarIndustries
          </Link>
        </div>

        {/* Center - Links */}
        <div className="nav-center">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/categories">Collection</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Right - Icons */}
        <div className="nav-right">
          <button className="icon-btn" aria-label="Search">
            <FaSearch />
          </button>
          <Link to="/log" className="icon-btn" aria-label="Account">
            <FaUser />
          </Link>
          <button className="icon-btn cart-btn" aria-label="Cart">
            <FaShoppingBag />
            <span className="cart-count">0</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

