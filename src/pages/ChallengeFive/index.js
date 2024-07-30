import React, { useState } from "react";
import User from "../../components/User";

/**
 *  -	Issue: Upon clicking the [Switch] button, the "Alert count" increases by one unit.
 *
 *  -	Rule:
 *    •	Keep the interface structure intact
 *    •	Only use React techniques.
 *
 *  -	Expected result: Click the [Switch] button multiple times and the “Alert count” remains at 1.
 */
export default function ChallengeFive() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <h1>Challenge 5</h1>
      <hr />
      <button onClick={() => setToggle((pre) => !pre)}>Switch</button>
      {toggle ? <User name="John" /> : <User name="Tim" />}
    </>
  );
}
