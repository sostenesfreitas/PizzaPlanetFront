import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ModalStyles from "./Modal.styles";
import Radio from "../Radio";
import * as CartActions from "../../store/modules/cart/actions";

const Modal = (props) => {
  const { show, onClose, product, products, addToCart } = props;
  const [flavor, setFlavor] = useState("");
  const [mega, setMega] = useState(false);
  const [sabor, setSabor] = useState(false);
  const [bebida, setBebida] = useState(false);
  const [total, setTotal] = useState(10);

  const handleProduct = () => {
    const productCart = {
      id: product._id,
      firstFlavor: product.flavor,
      secondFlavor: flavor || "",
      drink: bebida || "",
      mega: mega || "",
      total: total,
    };

    addToCart(productCart);

    onClose();
  };

  const select = (type) => {
    switch (type) {
      case "sabor":
        setSabor(!sabor);
        setFlavor(products[0]);
        !sabor ? setTotal(total + 3) : setTotal(total - 3);
        break;
      case "mega":
        setMega(!mega);
        !mega ? setTotal(total * 2) : setTotal(total / 2);

        break;
      case "bebida":
        setBebida(!bebida);
        !bebida ? setTotal(total + 5) : setTotal(total - 5);
        break;
      default:
    }
  };

  return (
    <ModalStyles show={show}>
      <div className="modal-content">
        <span className="close" onClick={() => onClose()}>
          &times;
        </span>
        <h1>{product.flavor}</h1>

        <div className="content">
          <div className="group-radios">
            <Radio
              check={mega}
              setCheck={() => select("mega")}
              label={"Mega Pizza"}
              id={"mega"}
            />

            <Radio
              check={bebida}
              setCheck={() => select("bebida")}
              label={"Adicionar Bebida"}
              id={"bebida"}
            />

            <Radio
              check={sabor}
              setCheck={() => select("sabor")}
              label={"Segundo Sabor"}
              id={"sabor"}
            />
            <div className="flavors">
              {sabor && (
                <>
                  {products.map((p) => (
                    <Radio
                      check={p._id === flavor._id}
                      setCheck={() => setFlavor(p)}
                      label={p.flavor}
                      id={`flavors ${p._id}`}
                    />
                  ))}
                </>
              )}
            </div>
          </div>

          <div className="box-bottom">
            <p>R$ {total},00</p>
            <input
              type="button"
              value="Salvar"
              className="buttom"
              onClick={() => handleProduct(product)}
            />
          </div>
        </div>
      </div>
    </ModalStyles>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);
export default connect(null, mapDispatchToProps)(Modal);
