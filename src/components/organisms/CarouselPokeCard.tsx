import Slider from "react-slick";

import PokeCard from "@src/components/molecules/PokeCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SETTING } from "@src/lib/react-slick/setting";
const data = [
  { name: "duck", imgUrl: "https://i.imgur.com/p3FfEL6.png" },
  { name: "duck", imgUrl: "https://i.imgur.com/FldDlNb.png" },
  { name: "duck", imgUrl: "https://i.imgur.com/pGKpAlb.png" },
];

export const CarouselPokeCard = () => {
  // instead of import like commend above, insert css to head.
  // increase js from 256.43 to 258.01
  // reduce css from 8.16 to 7.04

  return (
    <section className="">
      <Slider {...SETTING}>
        {data.map((record, idx) => (
          <PokeCard key={idx} imgUrl={record.imgUrl} name={record.name} />
        ))}
      </Slider>
    </section>
  );
};
