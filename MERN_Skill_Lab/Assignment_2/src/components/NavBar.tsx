import styles from "./NavBar.module.css";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <h1 className={styles.title}>Food Paradise</h1>
            <div>
                <Link to="/cart">
                    <span className={styles.orders_page_link}>🛒</span>
                </Link>
                <Link to="/">
                    <span className={styles.home_page_link}>Home</span>
                </Link>
                <Link to="/about">
                    <span className={styles.about_page_link}>About</span>
                </Link>
                <Link to="/contact">
                    <span className={styles.contact_page_link}>Contacts</span>
                </Link>
                <Link to="/menu">
                    <span className={styles.menu_page_link}>Menu</span>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
