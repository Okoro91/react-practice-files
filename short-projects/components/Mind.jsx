import React from "react";

const Mind = () => {
  const [isGoingOut, setIsGoingOut] = React.useState(true);

  const toggle = () => {
    setIsGoingOut((prev) => !prev);
  };

  return (
    <main className="container">
      <h1 className="title">Do I feel like going out tonight?</h1>
      <button className="value" onClick={toggle}>
        {isGoingOut ? "Yes" : "No"}
      </button>
    </main>
  );
};

export default Mind;
