import { useState } from 'react';

export default function usePizza({ pizzas, inputs }) {
  // 1. Create a state to hold our order
  const [order, setOrder] = useState([]);
  // 2. Add things to the order
  function addToOrder(orderedPizza) {
    setOrder([...order, orderedPizza]);
  }
  // 3. Make a function remove things from order
  function removeFromOrder(index) {
    setOrder([
      // Store everything before the item we want to remove
      ...order.slice(0, index),
      // Store everything after the item we want to remove
      ...order.slice(index + 1),
    ]);
  }
  // 4. Send this data the a serevrless function when they check out
  // TODO

  return {
    order,
    addToOrder,
    removeFromOrder,
  };
}
