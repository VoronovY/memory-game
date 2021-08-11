import { useSelector } from "react-redux";

export default function Timer() {
  const time = useSelector((state) => state.timer);

  return <>{time}</>;
}
