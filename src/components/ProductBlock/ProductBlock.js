import { useDispatch } from "react-redux";
import styles from "./ProductBlock.module.css";
import * as cartAction from "../../actions/CartAction";
import { useNavigate } from "react-router-dom";

function ProductBoard({ product }) {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const addToCart = () => {
    dispatch(cartAction.ADD(product));
  };
  const goDetail = () => {
    nav(`/product/${product.id}`);
  };
  return (
    <div className={styles.productItem}>
      <div className={styles.productImg} onClick={goDetail}>
        <img src={product.image} />
      </div>
      <div className={styles.productDetails}>
        <span className={styles.productTitle} onClick={goDetail}>
          {product.title.length > 15
            ? product.title.substr(0, 15) + "..."
            : product.title}
        </span>
        <div className={styles.productStats}>
          <span>{product.price}$</span>
          <span>★{product.rating.rate}</span>
        </div>
      </div>
      <button className={styles.button} onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductBoard;
