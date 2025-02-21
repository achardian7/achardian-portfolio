"use client";

import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="overflow-clip rounded-md"
    >
      <Swiper
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="mySwiper relative"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <motion.img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "auto" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev chevron absolute left-0">
          <FaChevronLeft className="size-5" />
        </div>
        <div className="swiper-button-next chevron absolute right-0 top-[50%]">
          <FaChevronRight className="size-5" />
        </div>
      </Swiper>
    </motion.div>
  );
};

export default Carousel;
