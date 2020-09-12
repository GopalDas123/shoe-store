import React from "react";
import "./App.css";
import Products from './Products'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './Home'
import { ProductDetails } from './ProductDetails';
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}/>
        <Route path="/products/product1" element={<ProductDetails item={1} />}/>
        <Route path="/products/product2" element={<ProductDetails item={2} />}/>
        <Route path="/products/product3" element={<ProductDetails item={3} />}/>
        <Route path="/products/product4" element={<ProductDetails item={4} />}/>
        <Route path="/products/product5" element={<ProductDetails item={5} />}/>
        <Route path="/products/product6" element={<ProductDetails item={6} />}/>
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
}


function NotFound() {
    return (
      <div>
        <h1>Not found!</h1>
        <p>Sorry your page was not found!</p>
      </div>
    );
  }
export default App;
