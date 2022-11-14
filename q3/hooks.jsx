// Name two hooks that help in optimizing performance of a react app explain how they help in improving performance. Write code to prove this.

// 1. use memo: Memoization speeds up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again



import React, { useMemo, useState } from "react";
import "./App.css";
const App = () => {
  const [name, setName] = useState("");
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);

  const answer = useMemo(() => {
    return add(val1, val2);
  }, [val1, val2]);

  return (
    <div>
      <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Value 1"
        value={val1}
        onChange={(e) => setVal1(e.target.value)}
      />
      <input
        placeholder="Value 2"
        value={val2}
        onChange={(e) => setVal2(e.target.value)}
      />
      {answer}
    </div>
  );
};

const add = (num1, num2) => {
  console.log("Adding numbers");
  return parseInt(num1) + parseInt(num2);
};
export default App;

// 2. usecallback:useCallback hook can be used to memoize functions and optimize React child components that rely on reference equality.
import { useCallback, useState } from "react";

export const Counter = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const memoizedSetCountOne = useCallback(
    () => setCountOne(countOne + 1),
    [countOne]
  );
  const memoizedSetCountTwo = useCallback(
    () => setCountTwo(countTwo + 1),
    [countTwo]
  );
  return (
    <>
      {countOne} {countTwo}
      <Button handleClick={memoizedSetCountOne} name="button1" />
      <Button handleClick={memoizedSetCountTwo} name="button1" />
    </>
  );
};