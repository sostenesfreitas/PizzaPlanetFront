import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CardStyles from "./Card.styles";
import Modal from "../Modal";
import axios from "axios";

const Card = ({ cart }) => {
  const [products, setProducts] = useState([]);
  const [prod, setProd] = useState("");
  const [modal, setModal] = useState(false);

  const showModal = (product) => {
    setProd(product);
    setModal(true);
  };

  const closeModal = () => setModal(false);

  useEffect(() => {
    const getProducts = async () => {
      // const { data } = await axios.get("http://localhost:8888/products");
      const data = [
        {
          _id: "5ec51f02813a4130783fa827",
          name: "Pizza",
          price: "R$ 10,00",
          flavor: "Calabresa",
          __v: 0,
        },
        {
          _id: "5ec51f18813a4130783fa828",
          name: "Pizza",
          price: "R$ 10,00",
          flavor: "Mussarela",
          __v: 0,
        },
        {
          _id: "5ec51f30813a4130783fa829",
          name: "Pizza",
          price: "R$ 10,00",
          flavor: "Dois Queijos",
          __v: 0,
        },
        {
          _id: "5ec51f40813a4130783fa82a",
          name: "Pizza",
          price: "R$ 10,00",
          flavor: "Três Queijos",
          __v: 0,
        },
        {
          _id: "5ec51f4c813a4130783fa82b",
          name: "Pizza",
          price: "R$ 10,00",
          flavor: "Bacon",
          __v: 0,
        },
        {
          _id: "5ec51f66813a4130783fa82c",
          name: "Pizza",
          price: "R$ 10,00",
          flavor: "Frango c/ Catupiry",
          __v: 0,
        },
        {
          _id: "5ec51f76813a4130783fa82d",
          name: "Pizza",
          price: "R$ 10,00",
          flavor: "Portuguesa",
          __v: 0,
        },
        {
          _id: "5ec51f80813a4130783fa82e",
          name: "Pizza",
          price: "R$ 10,00",
          flavor: "Marguerita",
          __v: 0,
        },
        {
          _id: "5ec51f86813a4130783fa82f",
          name: "Pizza",
          price: "R$ 10,00",
          flavor: "Mista",
          __v: 0,
        },
        {
          _id: "5ec526f1af13564bc6e0b98e",
          name: "4 Queijos",
          price: "R$ 10,00",
          flavor: "Test",
          __v: 0,
        },
      ];
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <CardStyles>
      <div className="box-title">
        <h1>Pizzas</h1>
        <Link to="/cart">
          <h1>cart</h1>
        </Link>
      </div>
      <div className="cards">
        {products.map((product) => (
          <div
            className="card-body"
            key={product._id}
            role="buttom"
            onClick={() => showModal(product)}
          >
            <img src="/casteloes.jpg" alt="pizza" />
            <div>
              <h4>{product.flavor}</h4>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <Modal
        show={modal}
        onClose={closeModal}
        product={prod}
        products={products}
      />
    </CardStyles>
  );
};

export default connect((state) => ({
  cart: state.cart,
}))(Card);
