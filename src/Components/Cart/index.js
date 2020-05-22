import React, { useState } from "react";
import CartStyles from "./Cart.styles";
import Radio from "../Radio";
import axios from "axios";

const Cart = ({ products }) => {
  const [card, setCard] = useState(false);
  const [money, setMoney] = useState(false);

  const getAddress = async () => {
    const { data } = await axios.get("https://viacep.com.br/ws/54420140/json/");
    console.log(data);
  };

  const setPayment = (type) => {
    switch (type) {
      case "money":
        setMoney(true);
        setCard(false);
        break;
      default:
        setCard(true);
        setMoney(false);
        break;
    }
  };

  return (
    <CartStyles>
      <div className="infos">
        <div className="card">
          <div className="box-title">
            <h1>Produtos</h1>
          </div>
          <div className="products">
            <h4>Flavor</h4>
            <p>type</p>
            <p>price</p>
          </div>
        </div>

        <div className="card">
          <div className="box-title">
            <h1>Endereço</h1>
          </div>
          <form>
            <div className="cep">
              <input type="text" placeholder="CEP" />
              <input
                type="buttom"
                value="buscar"
                onClick={() => getAddress()}
              />
            </div>

            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="CEP" />
            <input type="submit" value="Salvar" className="buttom" />
          </form>
        </div>

        <div className="card">
          <div className="box-title">
            <h1>Forma de Pagamento</h1>
          </div>
          <div className="products">
            <Radio
              check={card}
              setCheck={() => setPayment("card")}
              label={"Cartão"}
              id={"pagamento"}
            />
            <Radio
              check={money}
              setCheck={() => setPayment("money")}
              label={"Dinheiro"}
              id={"money"}
            />
            {money && <input type="text" placeholder="Troco ?" />}
          </div>
        </div>
      </div>
      <div className="card">
        <div className="box-title">
          <h1>Resumo</h1>
        </div>
        <h1>Total</h1>
      </div>
    </CartStyles>
  );
};

export default Cart;
