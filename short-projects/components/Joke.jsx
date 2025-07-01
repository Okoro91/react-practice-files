const Joke = (props) => {
  return (
    <>
      {<p className="mb-9 mt-9">Setup: {props.setup}</p>}
      <p className="mt-7">Punchline: {props.punchline}</p>
      <hr />
    </>
  );
};

export default Joke;
