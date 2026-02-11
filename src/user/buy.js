// import { useLocation } from "react-router-dom";

// export function Buy()
// {
//       const location = useLocation();
//   const state = location.state || {};
//     money = qty*{state.price}
//     return(
//     <>
//     <h1>quantity</h1><input type="text" placeholder="enter quantity" />
//     <h1>price: {this.money}</h1>
//     </>    
//     )
// }

// import { useLocation } from "react-router-dom";
// import { useState } from "react";

// export function Buy() {
//   const location = useLocation();
//   const state = location.state || {};

//   const [qty, setQty] = useState(1);

//   const money = qty * state.price;

//   return (
//     <>
//       <h1>Quantity</h1>
//       <input
//         type=""
//         value={qty}
//         onChange={(e) => setQty(Number(e.target.value))}
//       />

//       <h1>Price: ₹{money}</h1>
//     </>
//   );
// }



// import { useLocation } from "react-router-dom";
// import { useState } from "react";

// export function Buy() {
//   const location = useLocation();
//   const state = location.state || {};

//   const [qty, setQty] = useState(1);

//   const price = state.price || 0;
//   const money = qty * price;
//   const tokenAmount = money * 0.4;

//   const handlePayNow = () => {
//     alert(`Pay Token Amount: ₹${tokenAmount}`);
//     // later: integrate Razorpay / Stripe here
//   };

//   return (
//     <>
//       <h1>Quantity</h1>
//       <input
//         type="number"
//         min="1"
//         value={qty}
//         onChange={(e) => setQty(Number(e.target.value))}
//       />

//       <h2>Total Price: ₹{money}</h2>
//       <h3>Token Amount (40%): ₹{tokenAmount}</h3>

//       <button onClick={handlePayNow}>
//         PAY NOW
//       </button>
//     </>
//   );
// }



// import { useLocation } from "react-router-dom";
// import { useState } from "react";

// export function Buy() {
//   const location = useLocation();
//   const state = location.state || {};

//   const [qty, setQty] = useState(1);

//   const price = state.price || 0;
//   const money = qty * price;

//   const tokenAmount = Math.round(money * 0.4); // ✅ no decimals

//   return (
//     <>
//       <h1>Quantity</h1>
//       <input
//         type="number"
//         min="1"
//         value={qty}
//         onChange={(e) => setQty(Number(e.target.value))}
//       />

//       <h2>Total Price: ₹{money}</h2>
//       <h3>Token Amount (40%): ₹{tokenAmount}</h3>

//       <button>PAY NOW</button>
//     </>
//   );
// }



import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./buy.css";

export function Buy() {
  const location = useLocation();
  const state = location.state || {};

  const [qty, setQty] = useState(1);

  const price = state.price || 0;
  const money = qty * price;
  const tokenAmount = Math.round(money * 0.4);

  return (
    <div className="buy-page">
      <div className="buy-card">
        <h1 className="buy-title">Buy Now</h1>

        <div className="product-info">
          <p className="product-name">{state.title || "Product Name"}</p>
          <p className="product-price">₹{price} / item</p>
        </div>

        <div className="qty-section">
          <label>Quantity</label>
          <input
            type="number"
            min="1"
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
          />
        </div>

        <div className="price-box">
          <div className="row">
            <span>Total Price</span>
            <span>₹{money}</span>
          </div>

          <div className="row highlight">
            <span>Token Amount (40%)</span><div className="green">
            <span>₹{tokenAmount}</span></div>
          </div>
        </div>

        <button className="pay-btn">PAY NOW</button>
      </div>
    </div>
  );
}
