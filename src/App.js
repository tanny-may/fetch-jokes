import React, { useState, useEffect, useCallback } from "react";

import JokeList from "./components/JokeList";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJokesHandler = useCallback(async() => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://official-joke-api.appspot.com/jokes/programming/ten'
      );
      if (!response.ok) {
        throw new Error('Something goes wrong')
      }
      const data = await response.json();
    
      setJokes(data);
    }
    catch(e) {
      setError(e.message);
    }
    setIsLoading(false); 
  }, []);

  useEffect(() => {
    fetchJokesHandler();
  }, [fetchJokesHandler]);

  let content = <p>No jokes found  </p>;
  if (jokes.length > 0) content = <JokeList jokes={jokes} />;
  if (error) content = <p>{error}</p>;
  if (isLoading) content = <p>Jokes are loading...</p>

  return (
    <React.Fragment>
      <section>
        <h1>PROGRAMMING JOKES WEBSITE</h1>
        <button onClick={fetchJokesHandler}> <b>Refresh 10 jokes</b></button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
