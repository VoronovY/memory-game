import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  endOfGame,
  setStopGameTime,
  incTimer,
  setCurStats,
  resetScore,
  setNewImagesArray,
} from "../../redux/actions/images";
import "./startButton.css";

export default function StopButton() {
  const timer = useSelector((state) => state.timer);
  const curScore = useSelector((state) => state.currentScore);
  const [time, setTime] = useState(0);
  const dispatch = useDispatch();
  const curImageArr = useSelector((state) => state.imagesArr);

  useEffect(() => {
    const stopWatch = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 10);
    return () => {
      clearInterval(stopWatch);
      setTime(0);
    };
  }, []);
  useEffect(() => {
    dispatch(incTimer(time));
  }, [time]);

  useEffect(() => {
    if (curScore === 36) {
      endGame();
    }
  }, [curScore]);

  function endGame() {
    dispatch(endOfGame());
    dispatch(setStopGameTime());
    dispatch(
      setCurStats({
        date: new Date().toLocaleDateString(),
        time: timer,
        score: curScore,
      })
    );
    dispatch(resetScore());
    const newImagesArrForStore = (() => {
      const newArray = [...curImageArr];
      for (let i = newArray.length - 1; i > 0; i--) {
        const buffer = newArray[i];
        const index = Math.floor(Math.random() * i);
        newArray[i] = newArray[index];
        newArray[i] = { ...newArray[i], isGuess: false };
        newArray[index] = buffer;
      }
      newArray[0] = { ...newArray[0], isGuess: false };
      return newArray;
    })();
    dispatch(setNewImagesArray({ newArr: newImagesArrForStore }));
  }

  return (
    <button onClick={endGame} className="btn btn__stop">
      Закончить игру
    </button>
  );
}
