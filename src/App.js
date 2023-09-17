import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Detail from "./pages/Detail";
import Cart from './pages/Cart';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className='main-container'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;