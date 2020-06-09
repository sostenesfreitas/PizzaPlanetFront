import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartStyles from "./Cart.styles";
import Radio from "../Radio";
import axios from "axios";

const Cart = ({ cart }) => {
  const [card, setCard] = useState(false);
  const [money, setMoney] = useState(false);
  const [address, setAddress] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cep, setCep] = useState("");
  const [troco, setTroco] = useState("");

  const getAddress = async () => {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    setAddress(data);
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

  const saveAddress = () => {
    const newAddress = { ...address, cep, complemento };
    console.log(newAddress);
  };
  const total = cart.reduce((sum, t) => sum + t.total, 0);

  console.log(cart);
  return (
    <CartStyles>
      <div className="infos">
        <Link to="/">
          <h1>Home</h1>
        </Link>

        <div className="card">
          <div className="box-title">
            <h1>Endereço</h1>
          </div>
          <form>
            <div className="cep">
              <input
                type="text"
                placeholder="CEP"
                value={cep}
                onChange={({ target }) => setCep(target.value)}
              />
              <input
                type="button"
                value="buscar"
                onClick={() => getAddress()}
              />
            </div>
            <input
              type="text"
              placeholder="Logradouro"
              value={address.logradouro}
            />
            <input type="text" placeholder="Bairro" value={address.bairro} />
            <input
              type="text"
              placeholder="Localidade"
              value={address.localidade}
            />
            <input
              type="text"
              placeholder="Complemento: N. Apt. Bl."
              value={complemento}
              onChange={({ target }) => setComplemento(target.value)}
            />
            <input
              type="button"
              value="Salvar"
              className="buttom"
              onClick={() => saveAddress()}
            />
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
            {money && (
              <input
                type="text"
                placeholder="Troco ?"
                onChange={({ target }) => setTroco(target.value)}
              />
            )}
          </div>
        </div>
      </div>
      <div className="card">
        <div className="box-title">
          <h1>Resumo</h1>
        </div>
        {cart.map((c) => (
          <div className="resume">
            <p>Sabor: {c.firstFlavor}</p>
            {c.drink && <p>Com bebida</p>}
            {c.mega && <p>Mega</p>}
            {c.secondFlavor && <p>Segundo sabor: {c.secondFlavor.flavor}</p>}
          </div>
        ))}
        <div className="box-title">
          <h1>Endereço</h1>
        </div>
        <div className="resume">
          <p>Cep: {cep}</p>
          <p>Logradouro: {address.logradouro}</p>
          <p>Bairro: {address.bairro} </p>
          <p>Localidade: {address.localidade}</p>
          <p>Complemento: {complemento}</p>
        </div>

        <div className="box-title">
          <h1>Forma de Pagamento</h1>
        </div>
        <div className="resume">
          {card && <p>Pagamento com o cartão</p>}
          {money && <p>Pagamento com dinheiro</p>}
          {troco && <p>Troco para R$ {troco}</p>}
        </div>

        <p>Total: R${total}</p>
      </div>
    </CartStyles>
  );
};

export default connect((state) => ({
  cart: state.cart,
}))(Cart);
