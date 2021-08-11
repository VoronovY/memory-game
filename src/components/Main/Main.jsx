import "./Main.css";
import ImagesField from "../ImagesField/ImagesField.jsx";
import StartButton from "../Buttons/StartButton.jsx";
import CurScore from "../CurScore/CurScore.jsx";
import StopButton from "../Buttons/StopButton";
import Timer from "../Timer/Timer.jsx";
import { useSelector } from "react-redux";

export default function Main() {
  const isGame = useSelector((state) => state.isGameStart);
  return (
    <div className="main">
      <div className="game-info">
        <div className="game-info__cell">
          <Timer />
        </div>
        <div className="game-info__cell">
          <CurScore />
        </div>
      </div>
      <ImagesField />
      {isGame ? <StopButton /> : <StartButton />}
    </div>
  );
}
