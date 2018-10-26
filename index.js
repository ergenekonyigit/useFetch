'use strict';
let { useState, useEffect } = require('react');

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(Boolean(url));

  useEffect(
    () => {
      setData(null);
      setError(null);
      setLoading(Boolean(url));

      if (url) {
        fetch(url)
          .then(response => response.json())
          .then(setData)
          .catch(setError)
          .then(() => setLoading(false));
      }
    },
    [url]
  );

  return { data, error, loading };
}

module.exports = useFetch;
