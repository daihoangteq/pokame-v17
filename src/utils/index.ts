import { IMG_TYPE, IMG_URL, NAME_POKE_SKELETON } from "@src/constants/BASE";

export const getUrlImg = (name: string) => {
  console.log(name);
  if (name === NAME_POKE_SKELETON) return `/${name}.gif`;
  return `${IMG_URL}/${name}.${IMG_TYPE}`;
};

export const shuffle = <T>(array: T[]): T[] => {
  let currentIndex = array.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}