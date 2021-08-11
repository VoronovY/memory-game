import { useSelector } from "react-redux";

export default function CurScore() {
  const score = useSelector((state) => state.currentScore);

  return <span>{score}</span>;
}
