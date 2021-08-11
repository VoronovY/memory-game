import { v4 as uuidv4 } from "uuid";

const imagesArr = [
  { img: "/images/eagle.png", title: "eagle", isGuess: false },
  { img: "/images/cat.png", title: "cat", isGuess: false },
  { img: "/images/porcupine.png", title: "porcupine", isGuess: false },
  { img: "/images/dog.png", title: "dog", isGuess: false },
  { img: "/images/enot1.png", title: "enot1", isGuess: false },
  { img: "/images/piggy_green.png", title: "piggy_green", isGuess: false },
  { img: "/images/giro.png", title: "giro", isGuess: false },
  { img: "/images/gepard.png", title: "gepard", isGuess: false },
  { img: "/images/gypo.png", title: "gypo", isGuess: false },
  { img: "/images/hedgehog.png", title: "gedgehog", isGuess: false },
  { img: "/images/mole.png", title: "mole", isGuess: false },
  { img: "/images/ping.png", title: "ping", isGuess: false },
  { img: "/images/timon.png", title: "timon", isGuess: false },
  { img: "/images/pony.png", title: "rabbit2", isGuess: false },
  { img: "/images/elephant.png", title: "elephant", isGuess: false },
  { img: "/images/tiger2.png", title: "tiger2", isGuess: false },
  { img: "/images/vinny1.png", title: "vinny1", isGuess: false },
  { img: "/images/owl.png", title: "owl", isGuess: false },
];

const imagesArrForStore = (() => {
  const newArray = [...imagesArr, ...imagesArr];
  for (let i = newArray.length - 1; i > 0; i--) {
    const buffer = newArray[i];
    const index = Math.floor(Math.random() * i);
    newArray[i] = newArray[index];
    newArray[i] = { ...newArray[i], id: uuidv4() };
    newArray[index] = buffer;
  }
  newArray[0] = { ...newArray[0], id: uuidv4() };
  return newArray;
})();

export default imagesArrForStore;
