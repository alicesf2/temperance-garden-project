let activePlant: Element | null = null;

export function clickPlant(plant: Element) {
  // Increase z index
  plant.classList.remove("z-10");
  plant.classList.add("z-1000");

  // Remove position classes from Plant element
  const plantClassList = [...plant.classList];
  plantClassList.forEach((item) => {
    if (/^(top|left|right|bottom|scale)-/.test(item)) {
      plant.classList.remove(item);
    }
  });

  // Center Plant element and maintain dimensions
  plant.classList.add(
    "top-1/3",
    "left-1/2",
    "-translate-x-1/2",
    "-translate-y-1/2",
  );
  plant.classList.add("w-full");

  // Scale plant image and remove swaying animation
  const plantImg = plant.querySelector("img");
  plantImg?.classList.remove("animate-sway");
}

export function resetPlant(plantId: string) {
  // Get plant element associated with plantId
  const plant = document.getElementById(plantId);

  // Reset z index
  plant?.classList.remove("z-1000");
  plant?.classList.add("z-10");

  // Reset position and scale
  plant?.classList.remove(
    "top-1/3",
    "left-1/2",
    "-translate-x-1/2",
    "-translate-y-1/2",
  );
  plant?.classList.add("top-[20%]", "right-[-2.5%]", "scale-70");
  plant?.classList.remove("w-full");
}

/**
 * z-10 absolute top-[20%] right-[-2.5%] scale-70 [--glow-inner:15px] [--glow-opacity:0.3] [--glow-size:30px]
 * absolute [--glow-inner:15px] [--glow-opacity:0.3] [--glow-size:30px] z-1000 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full
 * absolute [--glow-inner:15px] [--glow-opacity:0.3] [--glow-size:30px] z-10
 */
