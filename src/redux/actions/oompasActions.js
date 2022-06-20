import { ActionTypes } from "../constants/actionTypes";

export const setAllOompas = (oompas) => {
  return {
    type: ActionTypes.GET_ALL_LOOMPAS,
    payload: oompas,
  };
};

export const setOompasDetails = (oompas) => {
  return {
    type: ActionTypes.GET_ONE_LOOMPA,
    payload: oompas,
  };
};
export const setNewOompasDetailsList = (oompas) => {
  return {
    type: ActionTypes.SET_OOMPAS_LIST_NO_DUPLICATE,
    payload: oompas,
  };
};
export const setEmptyOompasPage = () => {
  return {
    type: ActionTypes.RESET_ALL_OOMPAS
  }
}
