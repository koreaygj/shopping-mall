import { useEffect, useState } from "react";
import ProductBoard from "../ProductBoard/ProductBlock";
import styles from "./Board.module.css";

function Board() {
  const [category, setCategory] = useState("");
  const baseURL = "https://fakestoreapi.com/";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const hideLoadingScreen = () => {
    setLoading((prev) => !prev);
  };
  useEffect(() => {
    const getProducts = async () => {
      hideLoadingScreen();
      const URL =
        category === ""
          ? `${baseURL}products`
          : `${baseURL}products/category/${category}`;
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("Fetch error", err);
      } finally {
        hideLoadingScreen();
      }
    };
    getProducts();
  }, [category]);
  return (
    <div className={styles.boardHeader}>
      <div className={styles.title}>
        <span>Products</span>
      </div>
      <div className={styles.category}>
        <button onClick={() => setCategory("")}>ALL Products</button>
        <button onClick={() => setCategory("electronics")}>Electronics</button>
        <button onClick={() => setCategory("jewelery")}>Jewelery</button>
        <button onClick={() => setCategory("men's clothing")}>
          Mem's clothing
        </button>
        <button onClick={() => setCategory("women's clothing")}>
          Women's clothing
        </button>
      </div>
      <div className={styles.board}>
        <div
          className={
            loading ? styles.loadingOverlay : styles.hideLoadingOverlay
          }
        >
          <div className={styles.loader}></div>
        </div>
        {products.map((product) => (
          <ProductBoard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Board;
