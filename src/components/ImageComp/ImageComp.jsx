import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurImg, sameImg, incrementCurScore } from "../../redux/actions/images";
import "./ImageComp.css";

export default function Image({ image, countOfOpenImg, setCountOfOpenImg }) {
  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState();
  const curImg = useSelector((state) => state.currentImg);

  function clickToCard() {
    setCountOfOpenImg((prev) => prev + 1);
    setIsShow(true);
    dispatch(setCurImg(image));
    setTimeout(() => {
      setCountOfOpenImg((prev) => prev - 1);
      setIsShow(false);
      dispatch(setCurImg(null));
    }, 3000);
  }

  function isSame() {
    setCountOfOpenImg((prev) => prev + 1);
    setIsShow(true);
    setTimeout(() => {
      setCountOfOpenImg((prev) => prev - 1);
      setIsShow(false);
    }, 2000);
    if (image.title === curImg.title && image.id !== curImg.id) {
      dispatch(sameImg({ id1: image.id, id2: curImg.id }));
			dispatch(incrementCurScore())
    }
  }

  return (
    <div
      onClick={curImg ? (countOfOpenImg === 1 ? isSame : null) : clickToCard}
      className="card-img"
    >
      {isShow || image.isGuess ? (
        <img src={image.img} alt={image.title} />
      ) : null}
    </div>
  );
}
