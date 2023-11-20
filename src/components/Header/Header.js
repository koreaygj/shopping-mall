import { useSelector } from "react-redux";
import styles from "./Header.module.css";
import cartImg from "../../img/shoppingCart.png";
import profile from "../../img/profile.png";
import logOut from "../../img/logOut.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const cart = useSelector((rootReducer) => rootReducer.cart);
  const nav = useNavigate();
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo} onClick={() => nav("/")}>
        <span>logo</span>
      </div>
      <div className={styles.headerNav}>
        <img src={logOut} className={styles.headerLogOut} />
        <img src={profile} className={styles.headerAccount} />
        <div className={styles.headerCart} onClick={() => nav("/cart")}>
          <img src={cartImg} />
          <span className={styles.cartBadge}>{cart.length}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
