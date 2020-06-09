import styled from "styled-components";

const CartStyles = styled.div`
  display: flex;

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
    align-self: center;
    margin: 10px auto;
    border-radius: 5px;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.7);
    color: #f2f2f2;
    border: solid 1px #c2c2c2;
    font-weight: bold;
  }

  .infos {
    margin-left: auto;
  }

  .resume {
    padding: 20px;
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
    padding: 10px 5px;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.7);
    color: #f2f2f2;
    border: none;
  }

  [type="button"] {
    cursor: pointer;
    margin-left: 10px;
    padding: 10px 20px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`;

export default CartStyles;
