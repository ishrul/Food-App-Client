import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { Col, Row } from "react-bootstrap";
import SingleFood from "../SingleFood/SingleFood";
import OrderList from "../OrderList/OrderList";
import { Link } from "react-router-dom";
import { OrdersContext } from "../../../Context/OrdersContext";

const Home = () => {
  const [foods, setFoods] = useState([]);

  const { orders, setOrders, setTotal } = useContext(OrdersContext);

  const handleAddToCart = (food, portion) => {
    console.log(portion);

    const newOrder = [...orders, food];
    setOrders(newOrder);
  };

  let total = 0;
  for (const order of orders) {
    total = total + order.price1;
  }
  setTotal(total.toFixed(2));

  useEffect(() => {
    fetch("./foods.json")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);

  return (
    <div>
      <Row>
        <Col md={2} xs={1} className="side-bar">
          <p className="first"></p>
          <p className="sec"></p>
          <div>
            <i className="bi bi-menu-button-wide me-3"></i> <b>MENU</b>
          </div>
        </Col>
        <Col md={7} xs={5} className="food-items">
          <Row className="">
            {foods.map((food) => (
              <SingleFood
                key={food.id}
                food={food}
                handleAddToCart={handleAddToCart}
              ></SingleFood>
            ))}
          </Row>
        </Col>
        <Col md={3} xs={4} className="order-bar">
          <div className="order-list">
            <OrderList orders={orders}></OrderList>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <p>Total:</p>
            <b>${total.toFixed(2)}</b>
          </div>
          <Link to="/checkout">
            <button className="go-back" type="submit">
              Checkout
            </button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
