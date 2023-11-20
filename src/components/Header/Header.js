import { useSelector } from "react-redux";
import styles from "./Header.module.css";
import cartImg from "../../img/shoppingCart.png";
import profile from "../../img/profile.png";
import logOut from "../../img/logOut.png";

function Header() {
  const cart = useSelector((rootReducer) => rootReducer.cart);
  return (
    <header className={styles.header}>
      <span className={styles.headerLogo}>logo</span>
      <div className={styles.headerNav}>
        <img src={logOut} className={styles.headerLogOut} />
        <img src={profile} className={styles.headerAccount} />
        <div className={styles.headerCart}>
          <img src={cartImg} />
          <span className={styles.cartBadge}>{cart.length}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
