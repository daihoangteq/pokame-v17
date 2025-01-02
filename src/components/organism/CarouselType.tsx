import Slider from "react-slick";

import { SETTING_RIDER } from "@src/lib/react-slick/setting";
import { POKE_TYPES } from "@src/constants/POKE_TYPES";
import Label from "@src/components/atom/label";

const CarouselType = () => {

  return (
    <section className="m-auto w-9/12">
      <Slider {...SETTING_RIDER}>
        {POKE_TYPES.map((label, index) => (
          <Label.Poke label={label} key={index} />
        ))}
      </Slider>
    </section>
  );
};
export default CarouselType;
