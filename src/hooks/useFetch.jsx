// import { useState, useEffect, useRef } from "react";

// const useFetch = (requestCallback) => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true); // Başlangıçta loading durumu true olarak ayarlanır

//   useEffect(() => {
//     const abortController = new AbortController();
//     const signal = abortController.signal;
//     const doFetch = async () => {
//       try {
//         const results = await requestCallback();
//         if (!signal.aborted) {
//           setData(results);
//         }
//       } catch (e) {
//         if (!signal.aborted) {
//           setError(e);
//         }
//       } finally {
//         if (!signal.aborted) {
//           setLoading(false);
//         }
//       }
//     };
//     doFetch();
//     return () => {
//       abortController.abort();
//     };
//   }, []);
//   return { data, error, loading };
// };

// export default useFetch;

import { useState, useEffect, useRef } from "react";

const useFetch = (requestCallback) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Başlangıçta loading durumu true olarak ayarlanır

  const cacheData = useRef(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      if (cacheData.current) {
        // Önbellekte veri varsa, onu kullan
        setData(cacheData.current);
        setLoading(false);
      } else {
        try {
          const results = await requestCallback();
          if (!signal.aborted) {
            setData(results);
            cacheData.current = results; // Verileri önbelleğe al
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
