import { useState, useEffect, useCallback } from "react";
import { getAllOompaLoopma } from "../services/OompaLoopmaService";

function useFetch(query, page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const getData = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      const response = await getAllOompaLoopma(page);
      await setList((prev) => [...new Set([...prev, ...response.results])]);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [query, page]);

  useEffect(() => {
    getData(query);
  }, [query, getData, page]);

  return { loading, error, list };
}

export default useFetch;
