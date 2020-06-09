export default (state = [], action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.productCart];
    default:
      return state;
  }
};
