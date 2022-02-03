import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { OrdersContext } from "../../../Context/OrdersContext";
import "../Home/Home.css";

const Checkout = () => {
  const { orders, total } = useContext(OrdersContext);
  console.log(orders, total);

  return (
    <div>
      <h1>Your All Orders</h1>
      <h3>Total {orders.length} Orders</h3>
      <br />
      <br />
      <Link to="/">
        <button className="go-back" type="submit">
          Go Back
        </button>
      </Link>
      <Row>
        {orders.map((order) => (
          <Col
            md={4}
            xs={12}
            style={{
              background: `url(${order.img})`,
              backgroundPosition: "center",
              height: "40vh",
              width: "33vh",
              borderRadius: "5px",
              padding: "1vh",
            }}
            className="m-3 food-card"
          >
            <div className="food-review">
              <div className="bg-dark text-light px-2 rounded-pill fs-6">
                <i className="bi bi-star-fill pe-1"></i>
                {order.review}
              </div>
              <div>
                <i className="bi bi-heart bg-light p-2 rounded-bottom text-warning fw-bold"></i>
              </div>
            </div>
            <div className="food-info">
              <div className="d-flex text-start">
                <h3>{order.name} - * 1</h3>
              </div>

              <div className="text-start">
                <b>${order.price1}</b>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <hr />
      <div className="d-flex justify-content-around">
        <h4>Total:</h4>
        <b>${total}</b>
      </div>
      <hr />
    </div>
  );
};

export default Checkout;
