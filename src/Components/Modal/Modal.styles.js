import styled from "styled-components";

const ModalStyles = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(92, 92, 92);
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);

  .modal-content {
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 30%;
    border-radius: 5px;

    h1 {
    }
  }

  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }

  .group-radios {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
  }

  .radio {
    display: flex;
    margin-bottom: 10px;

    p {
      cursor: pointer;
      color: #fff;
    }
  }

  label {
    margin-left: 5px;
    color: #fff;
  }

  .flavors {
    padding: 2px 10px;
  }

  .content {
    display: flex;
    flex-direction: column;
  }

  .buttom {
    background-color: #95fc65;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 0 2px auto;
    transition-duration: 0.4s;
    opacity: 0.9;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }

  .box-bottom {
    display: flex;
    align-items: center;

    p {
      font-weight: bold;
    }
  }
`;
export default ModalStyles;
