import styled from "styled-components";

const CardStyles = styled.div`
  max-width: 700px;
  box-shadow: 13px 13px 34px 10px rgba(140, 140, 140, 0.63);
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 80px auto;
  border-radius: 5px;

  @media (max-width: 1024px) {
    width: 100%;
  }

  h1 {
    color: #3d3d3d;
  }

  h4 {
    font-size: 30px;
    color: #707070;
    &:hover {
      opacity: 0.7;
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
    border-bottom: solid 1px #c2c2c2;
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
