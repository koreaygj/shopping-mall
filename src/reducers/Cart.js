const Cart = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.product];
    case "REMOVE":
      return state.filter((item) => item !== action.product);
    default:
      return state;
  }
};

export default Cart;
