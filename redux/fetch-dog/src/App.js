import React, { useState } from 'react';

const onRequestDog = async (state, setState) => {
  setState({
    fetching: true,
    error: undefined
  });

  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const json = await response.json();
    setState({
      ...state,
      url: json.message
    });
  } catch (err) {
    setState({
      ...state,
      fetching: false,
      error: err.message
    });
  }
}

const onImageLoad = (state, setState) => {
  setState({
    ...state,
    fetching: false
  });
}

export const App = (
  {
    state,
    setState
  }
  ) => {
  // const [state, setState] = useState(
    // {
    //   fetching: false,
    //   url: undefined,
    //   error: undefined
    // }
  // )
  const { fetching, url, error } = state;
    return (
      <>
        <header>
          Fetch Dog
        </header>
        <div>
          {fetching && "fetching a dog..."}
          {!fetching && url && 'Click the button to fetch a new dog.'}
          {!fetching && !url && 'Click the button to begin.'}
        </div>
        <div>
          {fetching? <button disabled>Fetching...</button>: <button onClick={() => onRequestDog(state, setState)}>Fetch a Dog</button>}
        </div>
        <div>
          {error && 'There was an error: {error}'}
        </div>
        <div>
          {
            url && <img alt='doggo' src={url} onLoad={() => onImageLoad(state, setState)} />
          }
        </div>
      </>
    );
}
