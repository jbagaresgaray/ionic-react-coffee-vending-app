import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ITEM_SIZE, SPACING } from "../../constants";
import { FLAVORS } from "../../constants/flavors";

import "./FlavorSlider.scss";

const FlavorSlider: React.FC = () => {
  const styles: any = {
    flavorSlide: {
      marginLeft: `${SPACING}px`,
      marginRight: `${SPACING}px`,
      padding: `calc(${SPACING}px * 2)`,
    },
  };

  return (
    <Swiper
      className="FlavorSlides"
      initialSlide={0}
      slidesPerView={1.45}
      spaceBetween={40}
      centeredSlides={true}
      watchSlidesProgress={true}
      effect={"coverflow"}
      observer
      observeParents
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 2,
        slideShadows: false,
      }}
    >
      {FLAVORS.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="FlavorSlide" style={styles.flavorSlide}>
            <img alt="alt-img" src={item.img} className="FlavorSlide_Image" />
          </div>
        </SwiperSlide>
      ))}
      {/* <div className="FlavorSlideName">
        <h2>Caramel</h2>
      </div> */}
    </Swiper>
  );
};

export default FlavorSlider;
