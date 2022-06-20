import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAllOompas,
  setEmptyOompasPage,
} from "../redux/actions/oompasActions";
import { ActionTypes } from "../redux/constants/actionTypes";
import { getAllOompaLoopma } from "../services/OompaLoopmaService";

function useFetch(page) {
  const dispatch = useDispatch();
  const dateNow = new Date();
  const oompasList = useSelector((state) => state.oompasStorage.oompas);

  const getData = useCallback(async () => {
    try {
      const response = await getAllOompaLoopma(page);
      dispatch(setAllOompas({ ...response, date: new Date().toJSON() }));
    } catch (err) {
      dispatch({
        type: ActionTypes.OOMPAS_ERROR,
        payload: err,
      });
    }
  }, [page]);

  useEffect(() => {
    (async function () {
      if (oompasList.length > 0) {
        const dateFirstPage = new Date(oompasList[0].date);

        if (dateNow.getDate() > dateFirstPage.getDate()) {
          dispatch(setEmptyOompasPage());
          return await getData(page);
        }
        const oompaPage = oompasList.filter((oompaObj) => {
          return oompaObj.current === page;
        });
        if (oompaPage.length === 0) {
          getData(page);
        }
      } else {
        getData(page);
      }
    })();
  }, [getData, page]);
}

export default useFetch;
