/**
 * DO NOT EDIT THIS FILE
 */

import React, { useRef } from "react";

export default function AlertComp() {
  const rCount = useRef(0);
  rCount.current += 1;
  return <span>- Alert count : {rCount.current}</span>;
}
