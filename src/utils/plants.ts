import primrose from "../assets/primrose.png";
import redbud from "../assets/redbud.png";

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
    imgWidth: 800,
    class:
      "absolute top-[20%] right-[-2.5%] scale-70 [--glow-inner:15px] [--glow-opacity:0.3] [--glow-size:30px]",
    modalWidth: 800,
    modalClass: "relative",
  },
];
