import styles from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as cartAction from "../../actions/CartAction";

function ProductDetail() {
  const dispatch = useDispatch();
  const baseURL = "https://fakestoreapi.com/";
  const productId = useParams();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(0);
  const addToCart = () => {
    dispatch(
      cartAction.ADD({
        title: detail.title,
        category: detail.category,
        id: detail.id,
        image: detail.image,
        price: detail.price,
        count: counter,
      })
    );
  };
  const hideLoadingScreen = () => {
    setLoading((prev) => !prev);
  };
  useEffect(() => {
    const getProductDetail = async () => {
      const URL = `${baseURL}products/${productId.id}`;
      hideLoadingScreen();
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setDetail(data);
      } catch (err) {
        console.error("Fetch error", err);
      } finally {
        hideLoadingScreen();
      }
    };
    getProductDetail();
  }, []);
  return (
    <div>
      <div
        className={loading ? styles.loadingOverlay : styles.hideLoadingOverlay}
      >
        <div className={styles.loader}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={detail.image}></img>
        </div>
        <div className={styles.detail}>
          <h3>{detail.title}</h3>
          <span>{detail.category}</span>
          <span className={styles.rate}>{`★${
            detail.rating !== undefined ? detail.rating.rate : ""
          }`}</span>
          <hr />
          <span className={styles.price}>{`${detail.price}$`}</span>
          <div className={styles.description}>
            <div>{detail.description}</div>
          </div>
          <div className={styles.cartForm}>
            <input
              className={styles.count}
              defaultValue={1}
              type="number"
              onChange={(e) => setCounter(e.target.value)}
            ></input>
            <button className={styles.button}>
              <span onClick={addToCart}>Add To Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
