import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ProjectCarousel = ({ project }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {project &&
        project.images.map((projectImage, index) => (
          <SwiperSlide key={project.name + index}>
            <img
              className="object-cover w-full h-full"
              src={projectImage}
              alt={project.name}
            />
            {index === 0 && (
              <div className="absolute opacity-0 duration-300 top-0 left-0 px-6 py-4 xs:px-12 bg-black w-full h-full hover:opacity-80 flex justify-center items-center flex-col">
                <h2 className="mb-3 text-base xs:text-lg md:text-4xl font-semibold tracking-tight text-white">
                  {project.name}
                </h2>
                <p className="leading-normal text-center text-xs xs:text-sm md:text-3xl text-gray-100">
                  {project.description}
                </p>
              </div>
            )}
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default ProjectCarousel;
