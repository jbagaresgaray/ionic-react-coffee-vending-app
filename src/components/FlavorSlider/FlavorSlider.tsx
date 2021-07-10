import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SPACING } from "../../constants";
import { FLAVORS } from "../../constants/flavors";

import "./FlavorSlider.scss";

interface Props {
  onChange?: (value: any) => void;
}

const FlavorSlider: React.FC<Props> = ({ onChange }) => {
  const styles: any = {
    flavorSlide: {
      marginLeft: `${SPACING}px`,
      marginRight: `${SPACING}px`,
      padding: `calc(${SPACING}px * 3)`,
    },
  };
  const [slider, setSlider] = useState<any>(null);

  return (
    <Swiper
      className="FlavorSlides"
      initialSlide={0}
      slidesPerView={1.55}
      spaceBetween={40}
      centeredSlides={true}
      watchSlidesProgress={true}
      effect={"coverflow"}
      loop
      observer
      observeParents
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      }}
      onSwiper={(swiper) => {
        setSlider(swiper);
        const index = (slider && slider.activeIndex) || 0;
        const activeItem = FLAVORS[index];
        return onChange && onChange(activeItem);
      }}
      onSlideChange={() => {
        if (slider) {
          const index = slider.realIndex;
          const activeItem = FLAVORS[index];
          return onChange && onChange(activeItem);
        }
      }}
    >
      {FLAVORS.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="FlavorSlide" style={styles.flavorSlide}>
            <img alt="alt-img" src={item.img} className="FlavorSlide_Image" />
          </div>
          <div className="FlavorSlideName">
            <h2>{item.name}</h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FlavorSlider;
