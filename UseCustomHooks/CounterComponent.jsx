import React from "react";
import { useCounter } from "./useCounter";

const CounterComponent = ()=>{

  const  {increment,decrement,reset,count} = useCounter(0);

  return(
    <>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default CounterComponent;