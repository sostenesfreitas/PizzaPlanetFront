import styled from "styled-components";

const RadioStyles = styled.div`
  .radio {
    display: flex;
    margin-bottom: 10px;

    p {
      cursor: pointer;
    }
  }

  input[type="radio"] {
    display: none;
  }

  input[type="radio"] + label {
    margin-right: 10px;
    -webkit-appearance: none;
    background-color: #f5f6ff;
    border: 4px solid #f5f6ff;
    border-radius: 10px;
    width: 100%;
    display: inline-block;
    position: relative;
    width: 15px;
    height: 15px;
    cursor: pointer;
  }

  input[type="radio"]:checked + label {
    background: #e03838;
    border: 4px solid #f5f6ff;
  }
`;

export default RadioStyles;
