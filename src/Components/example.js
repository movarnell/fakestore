import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCards({ products , addToCartTotal, cartTotal, costTotal, removeFromCartTotal, cart}) {
  const [itemsTotal, setItemsTotal] = useState([]);
  const [eachCount, setEachCount] = useState([]);

  function handleClickAdd(product) {
    addToCartTotal(product);

    const index = itemsTotal.findIndex(item => item.key === product.key);
    if (index !== -1) {
      const newItemsTotal = [...itemsTotal];
      newItemsTotal[index].count += 1;
      setItemsTotal(newItemsTotal);
    } else {
      setItemsTotal([...itemsTotal, { key: product.key, count: 1 }]);
    }

    const countIndex = eachCount.findIndex(item => item.key === product.key);
    if (countIndex !== -1) {
      const newEachCount = [...eachCount];
      newEachCount[countIndex].count += 1;
      setEachCount(newEachCount);
    } else {
      setEachCount([...eachCount, { key: product.key, count: 1 }]);
    }
  }

  function handleClickRemove(product){
    removeFromCartTotal(product);

    const index = itemsTotal.findIndex(item => item.key === product.key);
    if (index !== -1) {
      const newItemsTotal = [...itemsTotal];
      newItemsTotal[index].count -= 1;
      if (newItemsTotal[index].count === 0) {
        newItemsTotal.splice(index, 1);
      }
      setItemsTotal(newItemsTotal);
    }

    const countIndex = eachCount.findIndex(item => item.key === product.key);
    if (countIndex !== -1) {
      const newEachCount = [...eachCount];
      newEachCount[countIndex].count -= 1;
      if (newEachCount[countIndex].count === 0) {
        newEachCount.splice(countIndex, 1);
      }
      set
