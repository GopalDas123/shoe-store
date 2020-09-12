import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="home">Home</Link>{" "}
      <Link to="products">Products</Link>{" "}
      <Link to="contact">Contact</Link>
    </nav>
  );
}
export default Header;
