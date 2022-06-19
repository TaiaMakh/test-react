import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setAllOompas } from "../redux/actions/oompasActions";
import { ActionTypes } from "../redux/constants/actionTypes";
import { getAllOompaLoopma } from "../services/OompaLoopmaService";

function useFetch(page) {
    console.log("entering in useFetch");
  //redux
  const dispatch = useDispatch();

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
      dispatch(setAllOompas(response.results));
    } catch (err) {
      setError(err);
      dispatch({
        type: ActionTypes.OOMPAS_ERROR,
        payload: err,
      });
    }
  }, [page]);

  useEffect(() => {
    getData(page);
  }, [getData, page]);

  return { loading, error, list };
}

export default useFetch;
