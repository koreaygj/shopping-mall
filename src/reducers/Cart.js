const Cart = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return state.find((item) => item.id === action.product.id)
        ? state.map((item) =>
            item.id === action.product.id
              ? { ...item, count: item.count + action.product.count }
              : item
          )
        : [...state, action.product];
    case "REMOVE":
      return state.filter((item) => item.id !== action.product.id);
    case "EDIT":
      return state.map((item) =>
        item.id === action.product.id ? action.product : item
      );
    default:
      return state;
  }
};

export default Cart;
