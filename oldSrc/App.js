import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header'
import Home from './Components/Home'
import {Product} from './Components/Product'
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="product" element={<Product/>}></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;
