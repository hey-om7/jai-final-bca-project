import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css"; // Reuse login styles

export function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [addressLine, setAddressLine] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const [country, setCountry] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5001/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, addressLine, city, pincode, country }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('userInfo', JSON.stringify(data));
                navigate("/");
            } else {
                alert(data.message || "Registration failed");
            }
        } catch (error) {
            console.error("Registration error:", error);
            alert("An error occurred during registration");
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Address Line</label>
                        <input
                            type="text"
                            value={addressLine}
                            onChange={(e) => setAddressLine(e.target.value)}
                            placeholder="Enter Address (Street/House No)"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>City</label>
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Enter city"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Pincode</label>
                        <input
                            type="text"
                            value={pincode}
                            onChange={(e) => setPincode(e.target.value)}
                            placeholder="Enter postal/pincode"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Country</label>
                        <input
                            type="text"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            placeholder="Enter country"
                            required
                        />
                    </div>
                    <button type="submit" className="login-btn">
                        Register
                    </button>
                </form>
                <div className="register-link">
                    Already have an account?{" "}
                    <Link to="/login">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
