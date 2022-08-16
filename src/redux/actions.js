import axios from "axios";
export const GET_ALL_COINS = "GET_ALL_COINS";

export function getCoin(ticker) {
  return async function (dispatch) {
    const response = await axios.get(
      `https://challenge42.herokuapp.com/coin/crypto/${ticker}`
    );
    return dispatch({
      type: "GET_COIN",
      payload: response.data,
    });
  };
}
export function getAllCoins() {
  return async function (dispatch) {
    try {
      const res = await axios.get(
        `https://challenge42.herokuapp.com/coin/allCrypto`
      );

      dispatch({
        type: GET_ALL_COINS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function detailClean(payload) {
  return {
    type: "DETAIL_CLEAN",
    payload,
  };
}

export function getFavcoin() {
  return async function (dispatch) {
    const response = await axios.get(
      "https://challenge42.herokuapp.com/coin/favcoin"
    );
    return dispatch({
      type: "GET_FAVCOIN",
      payload: response.data,
    });
  };
}

export function postFavcoin(payload) {
  return async function (dispatch) {
    const response = await axios.post(
      "https://challenge42.herokuapp.com/coin",
      { payload }
    );
    return response;
  };
}
export function deleteFavcoin(id) {
  return async function (dispatch) {
    const response = await axios.delete(
      `https://challenge42.herokuapp.com/coin/${id}`
    );
    return response;
  };
}
