import React, { useState } from "react";

/**
 *  -	Issue: The count of product is not displayed at the designated location as illustrated above.
 *
 *  -	Rule:
 *    •	Keep the interface structure intact
 *    •	Only use React techniques.
 *    •	You do not create state.
 *    •	You do not use any global state library (redux, context, v.v...)
 *
 *  -	Expected result: The count of product is displayed at the designated location as illustrated above.
 */
export default function ChallengeThree() {
  return (
    <>
      <h1>Challenge 3</h1>
      <hr />
      <h2>Product count : ?</h2>
      <CountMachine />
    </>
  );
}

function CountMachine() {
  const [productCount, setProductCount] = useState(0);
  return (
    <>
      <p>Product Count : {productCount}</p>
      <button onClick={() => setProductCount((pre) => pre + 1)}>Up</button>
    </>
  );
}
