import { useState, useEffect, useRef } from "react";

const useFetch = (requestCallback) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const cacheData = useRef(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      if (cacheData.current) {
        // If there is data in the cache, use it
        setData(cacheData.current);
        setLoading(false);
      } else {
        try {
          const results = await requestCallback();
          if (!signal.aborted) {
            setData(results);
            cacheData.current = results; // Cache the data
          }
        } catch (e) {
          if (!signal.aborted) {
            setError(e);
          }
        } finally {
          if (!signal.aborted) {
            setLoading(false);
          }
        }
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);

  return { data, error, loading };
};

export default useFetch;
