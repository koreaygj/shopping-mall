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
  const addToCart = () => {
    dispatch(cartAction.ADD(detail));
  };
  const hideLoadingScreen = () => {
    setLoading((prev) => !prev);
  };
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
  useEffect(() => {
    getProductDetail();
  }, [ProductDetail]);
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
          <span className={styles.rate}>{`★${detail.rating.rate}`}</span>
          <hr />
          <span className={styles.price}>{`${detail.price}$`}</span>
          <div className={styles.description}>
            <div>{detail.description}</div>
          </div>
          <button className={styles.button}>
            <span onClick={addToCart}>Add To Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
