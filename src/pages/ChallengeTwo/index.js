import React, { useState } from "react";
import Product from "../../components/Product";

/**
 *  -	Issue: Upon clicking the [Remove First Item] button, the "Alert count" increases by one unit in every Product Component
 *
 *  -	Rule:
 *    •	Keep the interface structure intact
 *    •	Only use React techniques.
 *
 *  -	Expected result: Click the [Remove First Item] button multiple times and the Alert Count remains at 1.
 */
export default function ChallengeTwo() {
  const [lsProduct, setLsProduct] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const handleRemove = () => {
    setLsProduct((pre) => pre.slice(1));
  };
  return (
    <>
      <h1>Challenge 2</h1>
      <hr />
      <button onClick={handleRemove}>Remove First Item</button>
      <h2>List Product</h2>
      {lsProduct.map((n, i) => (
        <Product key={i} num={n} />
      ))}
    </>
  );
}
