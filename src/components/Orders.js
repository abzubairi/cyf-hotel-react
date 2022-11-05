import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
const Orders = prop => {
  const othersItems = prop.orderType;
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <li>
      {othersItems}: {orders}
      <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default Orders;
