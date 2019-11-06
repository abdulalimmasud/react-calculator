import React from "react";
import Big from "big.js";

export default function operate(fristNo, secondNo, operation) {
  const one = Big(fristNo || "0");
  const two = Big(
    secondNo || (operation === "÷" || operation === "x" ? "1" : "0")
  );
  if (operation === "+") {
    return one.plus(two).toString();
  }
  if (operation === "-") {
    return one.minus(two).toString();
  }
  if (operation === "x") {
    return one.times(two).toString();
  }
  if (operation === "÷") {
    if (two === "0") {
      alert("Divide by 0 error");
      return "0";
    }
    return one.div(two).toString();
  }
  throw Error(`Unkonwn opertatoin '${operation}'`);
}
