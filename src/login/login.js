import { BrowserRouter, Routes, Route } from "react-router-dom";
import Log from "./log";
import Register from "./register";


function Login() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Log />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Login;
