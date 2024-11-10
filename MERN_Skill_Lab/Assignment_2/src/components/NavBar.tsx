import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <h1>Food Paradise</h1>
      <div>
      <Link to="/cart">
        <span className="orders_page_link">🛒</span>
      </Link>
      <Link to="/">
        <span className="home_page_link">Home</span>
      </Link>
      <Link to="/about">
        <span className="about_page_link">About</span>
      </Link>
      <Link to="/contact">
        <span className="contact_page_link">Contacts</span>
      </Link>
      <Link to="/menu">
        <span className="menu_page_link">Menu</span>
      </Link>
      </div>
    </>
  );
};

export default NavBar;
