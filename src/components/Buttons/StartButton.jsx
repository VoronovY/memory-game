import { useDispatch } from "react-redux";
import { startGame, setStartGameTime } from "../../redux/actions/images";
import "./startButton.css";
export default function StartButton() {
  const dispatch = useDispatch();
  function start() {
    dispatch(startGame());
  }
  return (
    <button onClick={start} className="btn btn__start">
      Начать игру
    </button>
  );
}
