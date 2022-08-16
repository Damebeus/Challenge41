import { GET_ALL_COINS } from "./actions.js";

const initialState = {
  detailcoin: [],
  favoritos: [],
  coins: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_COIN":
      return {
        ...state,
        detailcoin: action.payload,
      };
    case GET_ALL_COINS:
      return {
        ...state,
        coins: action.payload,
      };
    case "DETAIL_CLEAN":
      return {
        ...state,
        detailcoin: [],
        favoritos: [],
      };
    case "GET_FAVCOIN":
      return {
        ...state,
        favoritos: action.payload,
      };
    case "POST_FAVCOIN":
      return {
        ...state,
      };
    case "DELETE_FAVCOIN":
      return {
        ...state,
      };
    case "DELETE_STATE":
      return {
        ...state,
        favoritos: state.favoritos.filter((e) => e.id !== action.payload),
      };
    default:
      return state;
  }
}

export default rootReducer;
