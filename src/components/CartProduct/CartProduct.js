import { useEffect, useState } from "react";
import styles from "./CartProduct.module.css";
import { useDispatch } from "react-redux";
import * as cartAction from "../../actions/CartAction";

function CartProduct({ product }) {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const editCartProduct = () => {
    console.log(amount);
    dispatch(
      cartAction.EDIT({
        title: product.title,
        category: product.category,
        id: product.id,
        image: product.image,
        price: product.price,
        count: amount,
      })
    );
  };
  const removeCartProduct = () => {
    dispatch(
      cartAction.REMOVE({
        title: product.title,
        category: product.category,
        id: product.id,
        image: product.image,
        price: product.price,
        count: amount,
      })
    );
  };
  useEffect(() => {
    setAmount(product.count);
  }, [product]);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={product.image}></img>
      </div>
      <div className={styles.product}>
        <span className={styles.category}>{product.category}</span>
        <h3>{product.title}</h3>
        <div className={styles.cost}>
          <span className={styles.price}>{`${product.price}$  ⨉  `}</span>
          <input
            type="number"
            defaultValue={product.count}
            onChange={(e) => setAmount(e.target.value)}
          ></input>
          <span>{`= ${product.price * amount}`}</span>
        </div>
        <button className={styles.button} onClick={editCartProduct}>
          <span>Edit</span>
        </button>
        <button className={styles.button} onClick={removeCartProduct}>
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
}
export default CartProduct;
