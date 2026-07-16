import primrose from "../assets/primrose.png";
import redbud from "../assets/redbud.png";
import americanElm from "../assets/american-elm.png";
import easternRedCedar from "../assets/eastern-red-cedar.png";

export const plants = [
  {
    id: "primrose",
    imgSrc: primrose.src,
    imgWidth: 175,
    class:
      "absolute top-[45%] left-[-10%] scale-40 [--glow-opacity:0.5] [--glow-size:60px]",
    modalWidth: 125,
    modalClass: "relative",
  },
  {
    id: "eastern-redbud",
    imgSrc: redbud.src,
    imgWidth: 480,
    class:
      "absolute top-[28%] left-[20%] [--glow-inner:15px] [--glow-opacity:0.3] [--glow-size:30px] scale-70",
    modalWidth: 800,
    modalClass: "relative",
  },
  {
    id: "american-elm",
    imgSrc: americanElm.src,
    imgWidth: 140,
    class: "absolute top-[22%] left-[-1%]",
    modalWidth: 300,
    modalClass: "relative",
  },
  {
    id: "eastern-red-cedar",
    imgSrc: easternRedCedar.src,
    imgWidth: 90,
    class: "absolute top-[30%] left-[-1%]",
    modalWidth: 250,
    modalClass: "relative",
  },
];
