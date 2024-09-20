import "./App.css";
import Layout from "./components/Layout";
import Cart from "./pages/Cart";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="" element={<Homepage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<p>404 Page not Found</p>} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
