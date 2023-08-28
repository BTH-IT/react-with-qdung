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

const Categories = () => {
  return (
    <Styled.CategoriesWrapper>
      <div className="container">
        <Styled.TitleWrapper>
          <Styled.Title>
            Explore By Categories
            <img src={elipse}></img>
          </Styled.Title>
        </Styled.TitleWrapper>
        <SwiperCustom
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <CardCustom
              hasButton={false}
              cartTimeTag={false}
              hovered
            ></CardCustom>
          </SwiperSlide>
          <SwiperSlide>
            <CardCustom
              hasButton={false}
              cartTimeTag={false}
              hovered
            ></CardCustom>
          </SwiperSlide>
          <SwiperSlide>
            <CardCustom
              hasButton={false}
              cartTimeTag={false}
              hovered
            ></CardCustom>
          </SwiperSlide>
          <SwiperSlide>
            <CardCustom
              hasButton={false}
              cartTimeTag={false}
              hovered
            ></CardCustom>
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
    </Styled.CategoriesWrapper>
  );
};

export default Categories;
