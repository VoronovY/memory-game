import {
  INIT_IMAGES,
  SAME_IMG,
  SET_CUR_IMG,
  START_GAME,
  INC_CUR_SCORE,
  END_GAME,
  SET_CUR_STATS,
  SET_STOP_GAME_TIME,
  INCREMENT_TIMER,
  RESET_SCORE,
  SET_NEW_IMG_ARR,
} from "../types/types";

export const initialImages = (imagesObj) => ({
  type: INIT_IMAGES,
  payload: imagesObj,
});
export const startGame = () => ({
  type: START_GAME,
});
export const endOfGame = () => ({
  type: END_GAME,
});
export const setCurImg = (img) => ({
  type: SET_CUR_IMG,
  payload: img,
});
export const sameImg = (obj) => ({
  type: SAME_IMG,
  payload: obj,
});
export const incrementCurScore = () => ({
  type: INC_CUR_SCORE,
});
export const setStopGameTime = () => ({
  type: SET_STOP_GAME_TIME,
});
export const incTimer = (time) => ({
  type: INCREMENT_TIMER,
  payload: time,
});
export const setCurStats = (stats) => ({
  type: SET_CUR_STATS,
  payload: stats,
});
export const resetScore = () => ({
  type: RESET_SCORE,
});
export const setNewImagesArray = (obj) => ({
  type: SET_NEW_IMG_ARR,
  payload: obj,
});
