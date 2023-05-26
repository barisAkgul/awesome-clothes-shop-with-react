import { useState, useEffect, useRef } from "react";

const useFetch = (requestCallback) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Başlangıçta loading durumu true olarak ayarlanır

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const doFetch = async () => {
      try {
        const results = await requestCallback();
        if (!signal.aborted) {
          setData(results);
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
    };
    doFetch();
    return () => {
      abortController.abort();
    };
  }, []);
  return { data, error, loading };
};

export default useFetch;
