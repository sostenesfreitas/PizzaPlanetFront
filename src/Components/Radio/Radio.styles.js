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
    border: 1px solid #f5f6ff;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    min-width: 15px;
    min-height: 15px;
    cursor: pointer;
  }

  [type="radio"]:checked + label {
    border-color: #e03838;
  }

  [type="radio"]:checked + label:after,
  [type="radio"]:not(:checked) + label:after {
    content: "";
    width: 9px;
    height: 9px;
    background: #e03838;
    position: absolute;
    top: 2px;
    left: 2px;
    border-radius: 100%;
    transition: all 0.2s ease;
  }

  [type="radio"]:not(:checked) + label:after {
    opacity: 0;
    transform: scale(0);
  }
  [type="radio"]:checked + label:after {
    opacity: 1;
    transform: scale(1);
  }
`;

export default RadioStyles;
