import styled from "styled-components";

const CartStyles = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  .products {
    padding: 5px 10px;
    border-bottom: solid 1px #c2c2c2;

    h4 {
      font-size: 16px;
    }
  }

  .card {
    max-width: 700px;
    padding: 20px;
    font-family: Arial, Helvetica, sans-serif;
    margin: 10px 0;

    border-radius: 5px;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.7);
    color: #f2f2f2;
    border: solid 1px #c2c2c2;
    font-weight: bold;
  }

  .box-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: solid 1px #c2c2c2;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    padding: 10px;
  }

  input {
    margin-top: 10px;
    padding: 10px 0px;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.7);
    color: #f2f2f2;
    border: none;
  }
`;

export default CartStyles;
