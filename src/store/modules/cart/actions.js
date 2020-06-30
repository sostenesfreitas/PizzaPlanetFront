export const addToCart = (productCart) => {
  return {
    type: "ADD_TO_CART",
    productCart,
  };
};
