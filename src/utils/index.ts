import { IMG_TYPE, IMG_URL } from "@src/constants/BASE";

export const getUrlImg = (name: string) => {
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