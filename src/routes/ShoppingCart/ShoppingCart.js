import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";
import CartProduct from "../../components/CartProduct/CartProduct";
import cartImg from "../../img/shoppingCart.png";

function ShoppingCart() {
  const cart = useSelector((rootReducer) => rootReducer.cart);
  const [isEmpty, setIsEmpty] = useState(true);
  let totalCost = 0;
  useEffect(() => {
    cart.length === 0 ? setIsEmpty(true) : setIsEmpty(false);
    console.log(cart);
  }, []);
  return (
    <div>
      <Header />
      {isEmpty ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1 style={{ textAlign: "center" }}>cart is empty...</h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={cartImg} />
          </div>
        </div>
      ) : (
        cart.map((product) => {
          totalCost += product.price * product.count;
          return <CartProduct product={product} />;
        })
      )}
      <div style={{ display: "flex", justifyContent: "end" }}>
        <span
          style={{
            borderRadius: "3px",
            fontSize: "20px",
            backgroundColor: "#9a9c98",
            color: "white",
            padding: "3px",
            margin: "10px",
          }}
        >{`total cost: ${totalCost} $`}</span>
      </div>
    </div>
  );
}
export default ShoppingCart;
