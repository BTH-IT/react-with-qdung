import React, { useCallback, useRef } from "react";
import elipse from "../../assets/elipse.svg";
import * as Styled from "./styles";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { SwiperCustom } from "../../lib/swiperCustom";
import CardCustom from "../CardCustom";
import { ButtonCustom } from "../../lib/antdCustom";

const LiveAunctions = () => {
  return (
    <Styled.LiveAunctionsWrapper>
      <div className="container">
        <Styled.TitleWrapper>
          <Styled.Title>
            Live Aunctions
            <img src={elipse}></img>
          </Styled.Title>
        </Styled.TitleWrapper>
        <SwiperCustom
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          modules={[Navigation]}
        >
          <SwiperSlide>
            <CardCustom></CardCustom>
          </SwiperSlide>
          <SwiperSlide>
            <CardCustom></CardCustom>
          </SwiperSlide>
          <SwiperSlide>
            <CardCustom></CardCustom>
          </SwiperSlide>
          <SwiperSlide>
            <CardCustom></CardCustom>
          </SwiperSlide>
        </SwiperCustom>
        <Styled.BottomWrapper>
          <ButtonCustom
            type="default"
            textColor="white"
            fontWeight="500"
            paddingX="30px"
            paddingY="10px"
          >
            View All
          </ButtonCustom>
        </Styled.BottomWrapper>
      </div>
    </Styled.LiveAunctionsWrapper>
  );
};

export default LiveAunctions;
