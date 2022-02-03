import React from "react";
import { Col, Row } from "react-bootstrap";
import "./OrderList.css";

const OrderList = ({ orders }) => {
  return (
    <div className="myOrder">
      <h4>My Order</h4>
      <div>
        <Row>
          {orders.map((order) => (
            <Col md={12} key={order.id}>
              <Row>
                <Col md={3} xs={3}>
                  <div
                    className="order-img"
                    style={{
                      background: `url(${order.img})`,
                      backgroundPosition: "center",
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                    }}
                  ></div>
                </Col>
                <Col md={3} xs={9}>
                  <p>{order.name}</p>
                </Col>
                <Col md={3} xs={6}>
                  <input
                    type="number"
                    className="w-50"
                    defaultValue={1}
                    name=""
                    id=""
                  />
                </Col>
                <Col md={3} xs={6}>
                  <b>${order.price1}</b>
                </Col>
              </Row>
              <hr />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default OrderList;
