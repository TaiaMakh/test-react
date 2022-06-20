import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  oompas: [],
  oompasDetails: [],
  loading: true,
  loadingOneOompa: true,
  errorData: null
};

export const oompasReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_ALL_LOOMPAS:
      return {
        ...state,
        oompas: [...state.oompas, payload],
        loading: false,
      };
    case ActionTypes.RESET_ALL_OOMPAS:
      return {
        ...state,
        oompas: []
      }
    case ActionTypes.GET_ONE_LOOMPA:
      return {
        ...state,
        oompasDetails: [ ...state.oompasDetails, payload ],
        loadingOneOompa: false,
      };
    case ActionTypes.SET_OOMPAS_LIST_NO_DUPLICATE:
        return {
            ...state,
            oompasDetails: payload
        }
    case ActionTypes.OOMPAS_ERROR:
      return {
        loading: false,
        errorData: payload,
      };
    default:
      return state;
  }
};
