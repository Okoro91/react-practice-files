import React from "react";

const Add = () => {
  const [count, setCount] = React.useState(0);

  const add = () => {
    setCount((preCount) => preCount - 1);
  };
  const minus = () => {
    setCount((preCount) => preCount - 1);
  };
  return (
    <>
      <h1>How many times will Bob say "state" in this section?</h1>
      <div className="counter">
        <button className="minus" onClick={minus} aria-label="Decrease count">
          –
        </button>
        <h2 className="count">{count}</h2>
        <button className="plus" onClick={add} aria-label="Increase count">
          +
        </button>
      </div>
    </>
  );
};

export default Add;
