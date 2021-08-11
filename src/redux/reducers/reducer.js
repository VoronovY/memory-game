import {
  INIT_IMAGES,
  START_GAME,
  SET_CUR_IMG,
  SAME_IMG,
  INC_CUR_SCORE,
  END_GAME,
  SET_STOP_GAME_TIME,
  SET_CUR_STATS,
  INCREMENT_TIMER,
  RESET_SCORE,
  SET_NEW_IMG_ARR,
} from "../types/types";

export default function imageReducer(state = [], action) {
  const { type } = action;

  switch (type) {
    case INIT_IMAGES: {
      return { ...state, ...action.payload };
    }
    case START_GAME: {
      return { ...state, isGameStart: true };
    }
    case END_GAME: {
      return { ...state, isGameStart: false };
    }
    case SET_CUR_IMG: {
      return { ...state, currentImg: action.payload };
    }
    case SAME_IMG: {
      const imagesArray = state.imagesArr;
      const newImagesArray = imagesArray.map((el) => {
        if (el.id === action.payload.id1 || el.id === action.payload.id2) {
          return { ...el, isGuess: true };
        } else {
          return el;
        }
      });
      return { ...state, imagesArr: newImagesArray };
    }
    case INC_CUR_SCORE: {
      return { ...state, currentScore: state.currentScore + 2 };
    }
    case SET_STOP_GAME_TIME: {
      const stopTime = Date.now();
      return { ...state, endGameTime: stopTime };
    }
    case INCREMENT_TIMER: {
      const curTimer = action.payload;
      const minutes = Math.floor((curTimer / 6000) % 60);
      const seconds = Math.floor((curTimer / 100) % 60);
      const miliSeconds = curTimer % 100;
      const timer = `${minutes > 9 ? minutes : "0" + minutes}:${
        seconds > 9 ? seconds : "0" + seconds
      }:${miliSeconds > 9 ? miliSeconds : "0" + miliSeconds}`;
      return { ...state, timer: timer };
    }
    case SET_CUR_STATS: {
      const curArray = [...state.gameStats];
      curArray.push({
        date: action.payload.date,
        time: action.payload.time,
        score: action.payload.score,
      });
      return {
        ...state,
        gameStats: curArray,
      };
    }
    case RESET_SCORE: {
      return { ...state, currentScore: 0 };
    }
    case SET_NEW_IMG_ARR: {
      return { ...state, imagesArr: action.payload.newArr };
    }
    default: {
      return state;
    }
  }
}
