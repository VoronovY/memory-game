import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import imageReducer from "./reducers/reducer";
import imagesArrForStore from "./initArr";

const initState = {
  imagesArr: imagesArrForStore,
  isGameStart: false,
  currentImg: null,
  currentScore: 0,
  endGameTime: null,
  timer: "00:00:00",
  gameStats: [],
};

const store = createStore(imageReducer, initState, composeWithDevTools());

store.subscribe(() => {
  store.getState();
});

export default store;
