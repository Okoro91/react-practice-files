import Joke from "./Joke";
import script from "./script";
import "./Card.css";

const Cards = () => {
  const jokeElements = script.map((joke) => {
    return (
      <>
        <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />
      </>
    );
  });

  console.log(jokeElements);
  return <main>{jokeElements}</main>;
};

export default Cards;
