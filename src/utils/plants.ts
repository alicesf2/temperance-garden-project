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
      "absolute top-90 -left-12 lg:top-100 lg:-left-10 scale-40 [--glow-opacity:0.5] [--glow-size:60px]",
    modalWidth: 150,
    modalClass: "relative",
  },
  {
    id: "eastern-redbud",
    imgSrc: redbud.src,
    imgWidth: 700,
    imgWidthLg: 480,
    class:
      "absolute top-80 left-30 lg:top-20 lg:left-50 [--glow-inner:15px] [--glow-opacity:0.3] [--glow-size:30px] scale-70",
    modalWidth: 480,
    modalClass: "relative",
  },
  {
    id: "american-elm",
    imgSrc: americanElm.src,
    imgWidth: 150,
    imgWidthLg: 200,
    class: "absolute top-45 left-0 lg:top-0 lg:left-0",
    modalWidth: 190,
    modalClass: "relative",
  },
  {
    id: "eastern-red-cedar",
    imgSrc: easternRedCedar.src,
    imgWidth: 150,
    class: "absolute top-50 -left-8 lg:top-20 lg:-left-5",
    modalWidth: 220,
    modalClass: "relative",
  },
];
