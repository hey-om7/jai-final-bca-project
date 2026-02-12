import { HomePage } from "./home_page";
import { CategoriesPage } from "./categories_page";
import { AboutUs } from "./aboutus";
import ProductCards from "./products";
import ProductDetail from "./product_detail";
import { Route, Routes } from "react-router-dom";
import { Buy } from "./buy";
import { CheckLogin } from "./checklogin";
import { Cart } from "./cart";
import UserNavbar from "./navbar";


import OrderCompleted from "./order_completed";

export function User() {
  return (
    <div>
      <UserNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/categories" element={<CategoriesPage />} />

        {/* Dynamic Routes */}
        <Route path="/category/:categoryId" element={<ProductCards />} />
        <Route path="/category/:categoryId/product/:productId" element={<ProductDetail />} />

        <Route path="/buy" element={<Buy />} />
        <Route path="/checklogin" element={<CheckLogin />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-completed" element={<OrderCompleted />} />
      </Routes>
    </div>
  );
}
