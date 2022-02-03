import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import "./SingleFood.css";

const SingleFood = ({ food, handleAddToCart }) => {
  const { id, name, price1, review, img } = food;
  const [portion, setPortion] = useState();

  console.log(food);

  const cardBg = {
    background: `url(${img})`,
    backgroundPosition: "center",
    height: "40vh",
    width: "33vh",
    borderRadius: "5px",
    padding: "1vh",
  };

  return (
    <Col md={4} xs={12} style={cardBg} className="m-3 food-card">
      <div className="food-review">
        <div className="bg-dark text-light px-2 rounded-pill fs-6">
          <i className="bi bi-star-fill pe-1"></i>
          {review}
        </div>
        <div>
          <i className="bi bi-heart bg-light p-2 rounded-bottom text-warning fw-bold"></i>
        </div>
      </div>
      <div className="food-info">
        <div className="d-flex text-start">
          <h3>{name}</h3>
          <div>
            <select
              id="portion"
              className="form-select form-select-sm h-25 rounded-pill"
              aria-label=".form-select-sm example"
              disabled
            >
              <option selected value="250">
                250g
              </option>
              <option value="500">500g</option>
              <option value="1000">1000g</option>
            </select>
          </div>
        </div>
        <div className="text-start">
          <b>${price1}</b>
          <button type="submit" onClick={() => handleAddToCart(food)}>
            <i className="bi bi-cart-plus-fill"></i> Add to cart
          </button>
        </div>
      </div>
    </Col>
  );
};

export default SingleFood;
