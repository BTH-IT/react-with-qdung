import React, { useCallback, useRef } from "react";
import elipse from "../../assets/elipse.svg";
import * as Styled from "./styles";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { SwiperCustomV2 } from "../../lib/swiperCustom";
import CardCustom from "../CardCustom";
import { ButtonCustom } from "../../lib/antdCustom";

const PopularCollections = () => {
  return (
    <Styled.PopularCollectionsWrapper>
      <Styled.TitleWrapper>
        <Styled.Title>
          Popular Collections
          <img src={elipse}></img>
        </Styled.Title>
      </Styled.TitleWrapper>
      <SwiperCustomV2
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        modules={[Navigation]}
      >
        <SwiperSlide>
          <CardCustom
            cartTimeTag={false}
            cartName={false}
            cartAction={false}
            cartETH={false}
            hasButton={false}
          ></CardCustom>
        </SwiperSlide>
        <SwiperSlide>
          <CardCustom
            cartTimeTag={false}
            cartName={false}
            cartAction={false}
            cartETH={false}
            hasButton={false}
          ></CardCustom>
        </SwiperSlide>
        <SwiperSlide>
          <CardCustom
            cartTimeTag={false}
            cartName={false}
            cartAction={false}
            cartETH={false}
            hasButton={false}
          ></CardCustom>
        </SwiperSlide>
        <SwiperSlide>
          <CardCustom
            cartTimeTag={false}
            cartName={false}
            cartAction={false}
            cartETH={false}
            hasButton={false}
          ></CardCustom>
        </SwiperSlide>
      </SwiperCustomV2>
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
    </Styled.PopularCollectionsWrapper>
  );
};

export default PopularCollections;
