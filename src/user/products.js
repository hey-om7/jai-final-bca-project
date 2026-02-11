import "./products.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function ProductCards() {
    const { state } = useLocation();
  return (
     
    <div className="cards-container">
      
    
    <Link
    to="/product_detail" className="remove_link"
    state={{
    image: state.image,
    title: state.title,
    price: state.price,
    description: state.description,
  }}
    >
      <div className="product-card">
        <img src={state.image} alt={state.title} />
        <h3>{state.title}</h3>
        <p>₹{state.price}</p>
      </div>
      </Link>


     {/* <Link
    to="/product_detail" className="remove_link"
    
    >
      <div className="product-card">
        <img src={state.image} alt={state.title} />
        <h3>{state.title}</h3>
        <p>{state.price}</p>
      </div>
      </Link> */}
       
      


       <Link
    to="/product_detail" className="remove_link"
    state={{
    image: state.image2,
    title: state.title2,
    price: state.price2,
    description: state.description2,
  }}>
      <div className="product-card">
        <img src={state.image2} alt={state.title2} />
        <h3>{state.title2}</h3>
        <p>₹{state.price2}</p>
      </div>
   </Link>
      
      
       <Link
    to="/product_detail" className="remove_link"
    state={{
    image: state.image3,
    title: state.title3,
    price: state.price3,
    description: state.description3,
  }}>
      <div className="product-card">
        <img src={state.image3} alt={state.title3} />
        <h3>{state.title3}</h3>
        <p>₹{state.price3}</p>
      </div>
      </Link>

    
    
    
    </div>
  );
}


