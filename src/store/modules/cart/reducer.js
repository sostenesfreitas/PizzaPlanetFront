import produce from "immer";

export default (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return produce(state, (draft) => {
        draft.push({
          ...action.productCart,
        });
      });
    case "REMOVE_FROM_CART":
      return produce(state, (draft) => {
        const productIndex = draft.findIndex(
          (p) => p.id === action.productCart.id
        );

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    default:
      return state;
  }
};
