import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Checkout from "./Pages/Home/Checkout/Checkout";
import { OrdersContext } from "./Context/OrdersContext";
import { useState } from "react";

function App() {
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState();

  return (
    <div className="App">
      <OrdersContext.Provider value={{ orders, setOrders, total, setTotal }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </OrdersContext.Provider>
    </div>
  );
}

export default App;
