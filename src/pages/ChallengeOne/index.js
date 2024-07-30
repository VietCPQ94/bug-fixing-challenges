import React, { useState } from "react";
import AlertComp from "../../components/AlertComp";

/**
 *  -	Issue: Upon clicking the [Up] button, the "Alert count" increases by one unit.
 *
 *  -	Rule:
 *    •	Keep the interface structure intact
 *    •	Only use React techniques.
 *    •	You do not move/edit "Alert" Component.
 *
 *  -	Expected result: Click the [Up] button multiple times and the “Alert count” remains at 1.
 */
export default function ChallengeOne() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Challenge 1</h1>
      <hr />
      <h2>Count value : {count}</h2>
      <button onClick={() => setCount((pre) => pre + 1)}>Up</button>
      <hr />
      {/* DON'T MOVE ALERT COMPONENT */}
      <AlertComp />
    </div>
  );
}
