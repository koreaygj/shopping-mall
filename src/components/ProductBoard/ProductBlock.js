import { useDispatch } from "react-redux";
import styles from "./ProductBlock.module.css";
import * as cartAction from "../../actions/CartAction";

function ProductBoard({ product }) {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartAction.ADD(product));
  };
  return (
    <div className={styles.productItem}>
      <div className={styles.productImg}>
        <img src={product.image} />
      </div>
      <div className={styles.productDetails}>
        <span className={styles.productTitle}>
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
