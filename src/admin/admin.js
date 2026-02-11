// import logo from './logo.svg';
// import './App.css';
import Add from './add';
import HomePage from './homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Orders from './orders';
import OrderDeatils from './orderdetails';

function Admin() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/add-products" element={<Add />} /> 
        <Route path="/view-orders" element={<Orders/>} /> 
        <Route path="/orderdetails" element={<OrderDeatils/>} />
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default Admin;
