import { IMG_TYPE, IMG_URL } from "@src/constants/BASE";

export const getUrlImg = (name: string) => {
  return `${IMG_URL}/${name}.${IMG_TYPE}`;
};
