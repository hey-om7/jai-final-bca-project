
 import CardExample from "./card";
 import "./home_page.css";



 import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
 import ImageSlider from "./slider";





 export function HomePage() {

 
   return (
  
 <div className="home-page-container">
 {/* <Button variant="primary">Click</Button> */}

 


     <h1>Ambarkar towels</h1>
     <ImageSlider/>

       {/* Your image grid below */}
       <div className="image-grid">
       
       </div>
     {/* <img src="/wallpaper.jpg" className="big_image" alt="logo" /> */}
     <img src="/hor1.jpeg" className="hor1" alt="hor1" />
     <h1>choose what you suits you:</h1>
     <br/>


     <CardExample/>

    
     <br/>
 <img src="/hor2.jpeg" className="hor2" alt="hor2" />


      <footer className="footer">
       <div className="footer-content">
         <span className="brand">Filament</span>
         <span className="dot">•</span>
         <a href="/about">About</a>
         <a href="/products">Upcoming</a>
         <a href="/reporterror">Contact</a>
       </div>

       <div className="socials">
         <a href="https://www.instagram.com/" aria-label="Instagram">
           <FaInstagram />
         </a>
         <a href="https://x.com/" aria-label="Twitter">
           <FaTwitter />
         </a>
         <a href="https://www.linkedin.com/" aria-label="LinkedIn">
           <FaLinkedin />
         </a>
       </div>
      <p className="copy">© 2026 Filament Towels</p>
     </footer>
   </div>
   );
 }

