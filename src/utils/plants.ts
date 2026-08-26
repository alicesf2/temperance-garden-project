import primrose from "../assets/primrose.png";
import redbud from "../assets/redbud.png";
import americanElm from "../assets/american-elm.png";
import easternRedCedar from "../assets/eastern-red-cedar.png";

export const plants = [
  {
    id: "primrose",
    imgSrc: primrose.src,
    class: "absolute bottom-30 left-0 lg:bottom-40 w-[70px] lg:w-[90px]",
    modalWidth: 150,
    modalClass: "relative",
  },
  {
    id: "eastern-redbud",
    imgSrc: redbud.src,
    imgWidth: 700,
    imgWidthLg: 480,
    class: "absolute top-15 left-30 lg:top-20 lg:left-50 scale-70",
    modalWidth: 480,
    modalClass: "relative",
  },
  {
    id: "american-elm",
    imgSrc: americanElm.src,
    class:
      "absolute -top-15 -left-5 lg:-top-15 lg:left-0 w-[150px] lg:w-[250px]",
    modalWidth: 190,
    modalClass: "relative",
  },
  {
    id: "eastern-red-cedar",
    imgSrc: easternRedCedar.src,
    imgWidth: 150,
    class:
      "absolute -top-5 -left-8 lg:top-0 lg:-left-10 w-[120px] lg:w-[215px]",
    modalWidth: 220,
    modalClass: "relative",
  },
];
