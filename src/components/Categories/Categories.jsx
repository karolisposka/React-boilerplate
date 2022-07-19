import React from "react";
import * as S from "./Categories.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { FaBicycle, FaSearch } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

const Categories = ({ items }) => {
  return (
    <>
      <S.Container>
        <S.Section>
          <Swiper
            modules={[Navigation]}
            Navigation
            breakpoints={{
              0: {
                spaceBetween: 10,
                slidesPerView: 2,
              },
              768: {
                spaceBetween: 25,
                slidesPerView: 4,
              },
            }}
          >
            {items &&
              items.map((item, index) => (
                <SwiperSlide key={index}>
                  <S.Tag>
                    <S.H1>{item.title}</S.H1>
                  </S.Tag>
                </SwiperSlide>
              ))}
          </Swiper>
        </S.Section>
      </S.Container>
    </>
  );
};

export default Categories;
