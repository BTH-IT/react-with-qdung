import styled from "styled-components";
import { Swiper } from "swiper/react";

export const SwiperCustom = styled(Swiper)`
  &.swiper {
    margin-top: 30px !important;
    position: relative;
    padding-top: 54px;

    & > .swiper-button-next,
    & > .swiper-button-prev {
      color: black;
      background-color: white;
      width: 54px;
      height: 54px;
      position: absolute;
      border-radius: 50%;
    }

    & > .swiper-button-next {
      right: 0;
      top: 23px;

      &::after {
        transform: translate(3px, 1px);
      }
    }

    & > .swiper-button-prev {
      left: unset;
      right: 80px !important;
      top: 23px;
      &::after {
        transform: translate(-3px, 1px);
      }
    }

    & > .swiper-wrapper {
      margin-top: 20px;
    }
  }
`;

export const SwiperCustomV2 = styled(SwiperCustom)`
  &.swiper {
    padding-top: 0;
    margin-top: 60px !important;

    & > .swiper-button-next {
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }

    & > .swiper-button-prev {
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;
