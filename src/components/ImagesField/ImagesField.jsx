import ImageComp from "../ImageComp/ImageComp.jsx";
import { useSelector } from "react-redux";
import "./imageField.css";
import { useState } from "react";

export default function ImagesField() {
  const imagesForRender = useSelector((state) => state.imagesArr);
  const isGameStart = useSelector((state) => state.isGameStart);
  const stats = useSelector((state) => state.gameStats);
  const [countOfOpenImg, setCountOfOpenImg] = useState(0);

  return (
    <div className="image-field">
      {isGameStart ? (
        imagesForRender.map((el) => {
          return (
            <ImageComp
              image={el}
              key={el.id}
              setCountOfOpenImg={setCountOfOpenImg}
              countOfOpenImg={countOfOpenImg}
            />
          );
        })
      ) : (
        <div className="image-field__content">
          {stats.length
            ? stats.map((el, index) => {
                return (
                  <div>
                    {index + 1}. Дата игры - {el.date}, время игры - {el.time},{" "}
                    очки - {el.score}
                  </div>
                );
              })
            : `Привет! Для начала игры нажми 'Начать игру'`}
        </div>
      )}
    </div>
  );
}
