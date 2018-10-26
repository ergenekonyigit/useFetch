import React from 'react';
import { render } from 'react-dom';
import useFetch from './';

function App() {
  let value = useFetch('https://api.github.com/repos/ergenekonyigit/nemene');
  return value.loading ? (
    <div>Loading...</div>
  ) : (
    <pre>{JSON.stringify(value.data, null, 2)}</pre>
  );
}

render(<App />, window.root);
