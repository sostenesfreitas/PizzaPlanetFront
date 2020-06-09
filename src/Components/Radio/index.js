import React from "react";
import RadioStyles from "./Radio.styles";

const Radio = ({ check, setCheck, label, id }) => (
  <RadioStyles>
    <div className="radio">
      <div>
        <input
          type="radio"
          id={id}
          checked={check}
          onClick={() => setCheck()}
        />
        <label htmlFor={id} />
      </div>
      <p onClick={() => setCheck()}>{label}</p>
    </div>
  </RadioStyles>
);

export default Radio;
