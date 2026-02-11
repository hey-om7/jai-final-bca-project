import { HomePage } from "./home_page";

import { Type1 } from "./type1";

import {Route,Routes} from "react-router-dom";
import { Type2 } from "./type2";
import { Type3 } from "./type3";
import { Type4 } from "./type4";
import NavBar from "./navbar";
import { BrowserRouter } from 'react-router-dom';
import ProductDetail from "./product_detail";
import { Buy } from "./buy";
import { AboutUs } from "./aboutus";
import  ReportError  from "./reporterror";
import KnowMore from "./KnowMore";



import { CheckLogin } from "./checklogin";
import Log from "../login/log";

import Register from "../login/register";

function User() {
  return (
    <div className="App">
      
      
      
      
      <BrowserRouter>   
        <NavBar/>   
      <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/type1" element={<Type1/>}/>
                  <Route path="/type2" element={<Type2/>}/>
                  <Route path="/type3" element={<Type3/>}/>
                  <Route path="/type4" element={<Type4/>}/>
                  <Route path="/product_detail" element={<ProductDetail/>}/>
                  <Route path="/buy" element={<Buy/>} />

                  <Route path="/about" element={<AboutUs/>} />
                  <Route path="/reporterror" element={<ReportError/>} />
                  <Route path="/know-more" element={<KnowMore/>} />
                  
                  <Route path="/log" element={<Log/>} />
                  <Route path="/checklogin" element={<CheckLogin isLogin={false} />} />
                  <Route path="/register" element={<Register/>} />

      </Routes>
</BrowserRouter>
      

    </div>
  );
}

export default User;
