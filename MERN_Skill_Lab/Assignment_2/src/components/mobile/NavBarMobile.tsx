import styles from "./NavBarMobile.module.css";
import {Link} from "react-router-dom";

const NavBarMobile = () => {
    return (
        <nav>
            <div className={styles.title}>
                <h1>Food Paradise</h1>
            </div>
            <div>
                <Link to="/cart">
                    <span className={styles.orders_page_link}>🛒</span>
                </Link>
                <Link to="/">
                    <span className={styles.home_page_link}>🏠</span>
                </Link>
                <Link to="/about">
                    <span className={styles.about_page_link}>❔</span>
                </Link>
                <Link to="/contact">
                    <span className={styles.contact_page_link}>📞</span>
                </Link>
                <Link to="/menu">
                    <span className={styles.menu_page_link}>📃</span>
                </Link>
            </div>
        </nav>
    );
};

export default NavBarMobile;
