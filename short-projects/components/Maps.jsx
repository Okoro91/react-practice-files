import Joke from "./Joke";
import script from "./script";

const Maps = () => {
  const jokeElements = script.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />;
  });

  console.log(jokeElements);
  return <main>{jokeElements}</main>;
};

export default Maps;
