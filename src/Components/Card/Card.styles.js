import styled from "styled-components";

const CardStyles = styled.div`
  max-width: 700px;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 auto;
  border-radius: 5px;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  color: #f2f2f2;
  border: solid 1px #c2c2c2;
  font-weight: bold;

  @media (max-width: 1024px) {
    width: 100%;
  }

  p {
    color: #c2c2c2;
  }

  h4 {
    font-size: 18px;
    &:hover {
      color: #fff;
    }
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
  }

  .card-body {
    display: flex;
    width: 50%;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  .box-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: solid 1px #c2c2c2;
  }

  img {
    width: 30%;
    border-radius: 5px;
    margin-right: 10px;
    transition: width 0.5s;
    &:hover {
      width: 40%;
    }
  }
`;

export default CardStyles;
