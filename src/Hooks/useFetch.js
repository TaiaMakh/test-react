import { useState, useEffect, useCallback } from "react";
import { getAllOompaLoopma } from "../services/OompaLoopmaService";

function useFetch(page) {
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
  }, [page]);

  useEffect(() => {
    getData(page);
  }, [getData, page]);

  return { loading, error, list };
}

export default useFetch;
