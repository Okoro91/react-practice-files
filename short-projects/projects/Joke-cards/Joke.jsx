import React from "react";
const Joke = (props) => {
  const [isShown, setIsShown] = React.useState(false);

  function toggleShown() {
    setIsShown((prev) => !prev);
  }
  return (
    <>
      <div>
        {props.setup && <h3>{props.setup}</h3>}
        <p>{isShown ? props.punchline : ""}</p>
        <button onClick={toggleShown}>
          {!isShown ? "Show punchline" : "Hide punchline"}
        </button>
        <hr />
      </div>
      <hr />
    </>
  );
};

export default Joke;
