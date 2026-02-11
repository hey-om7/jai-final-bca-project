/* import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Ambarkar Industries</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
            <NavDropdown title="Other" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Report error</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Contact us
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">FAQ</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar; */


  // import { useState } from "react";
  // import "./navbar.css";

  // function NavBar() {
  //   const [open, setOpen] = useState(false);

  //   return (
  //     <nav className="navbar">
  //       {/* LEFT */}
  //       <div className="nav-left">
  //         <span className="company-name">Ambarkar Industries</span>
  //       </div>

  //       {/* CENTER */}
  //       <div className="nav-center">
  //         <input
  //           type="text"
  //           placeholder="Search products, services..."
  //           className="search-input"
  //         />
  //       </div>

  //       {/* RIGHT */}
  //       <div className="nav-right">
  //         <button className="login-btn">Login</button>

  //         <div className="more-container">
  //           <span
  //             className="more-btn"
  //             onClick={() => setOpen(!open)}
  //           >
  //             More ▾
  //           </span>

  //           {open && (
  //             <div className="dropdown">
  //               <span>About Us</span>
  //               <span>Report Error</span>
  //               <span>Know More</span>
  //             </div>
  //           )}
  //         </div>

  //         <img src="/logo.png" alt="logo" className="nav-logo" />
  //       </div>
  //     </nav>
  //   );
  // }

  // export default NavBar;

/*  import { useState } from "react";
 import "./navbar.css";
 function NavBar() {
   const [open, setOpen] = useState(false);

   return (
     <nav className="navbar">
       <div className="nav-left">
         <span className="company-name">Ambarkar Industries</span>
       </div>

       <div className="nav-center">
         <input
           type="text"
           placeholder="Search products, services..."
           className="search-input"
         />
       </div>
      <div className="nav-right">
         <button className="login-btn">Login</button>

         <div className="more-container">
           <span
             className="more-btn"
             onClick={() => setOpen(!open)}
           >
             More ▾
           </span>

           <div className={`dropdown ${open ? "show" : ""}`}>
             <span><button>About Us</button></span>
             <span>Report Error</span>
             <span>Know More</span>
           </div>
         </div>

         <img src="/logo.png" alt="logo" className="nav-logo" />
       </div>
     </nav>
   );
 }

 export default NavBar;

 */



//  import "./navbar.css";

// function NavBar() {
//   return (
//     <nav className="navbar">
//       {/* Left */}
//       <div className="nav-left">
//         <span className="company-name">Ambarkar Industries</span>
//       </div>

//       {/* Center */}
//       <div className="nav-center">
//         <input
//           type="text"
//           placeholder="Search products, services..."
//           className="search-input"
//         />
//       </div>

//       {/* Right */}
//       <div className="nav-right">
//         <div className="nav-links">
//           <span className="nav-link">About Us</span>
//           <span className="nav-link">Report Error</span>
//           <span className="nav-link">Know More</span>
//         </div>

//         <button className="login-btn">Login</button>

//         <img src="/logo.png" alt="logo" className="nav-logo" />
//       </div>
//     </nav>
//   );
// }

// export default NavBar;

import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      {/* Left */}
      <div className="nav-left">
        <Link to="/" className="nav-link2">Ambarkar Industries</Link>
      </div>

      {/* Center */}
      <div className="nav-center">
        <input
          type="text"
          placeholder="Search products, services..."
          className="search-input"
        />
      </div>

      {/* Right */}
      <div className="nav-right">
        <div className="nav-links">
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/reporterror" className="nav-link">Report Error</Link>
          <Link to="/know-more" className="nav-link">Know More</Link>
        </div>

        <Link to="/log">
          <button className="login-btn">Login</button>
        </Link>

        <img src="/logo192.png" alt="logo" className="nav-logo" />
      </div>
    </nav>
  );
}

export default NavBar;

