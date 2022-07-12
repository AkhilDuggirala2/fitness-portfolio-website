import React from "react";
import "./testimonial.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";
import AVATAR5 from "../../assets/avatar5.jpg";
import AVATAR6 from "../../assets/avatar6.jpg";

// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

//Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const data = [
  {
    avatar: AVATAR1,
    name: "Body Master",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, quae sint minus voluptas doloremque itaque accusamus, aut accusantium consequuntur cum nisi eius voluptatibus nesciunt, ea corporis dolorem? Ratione neque inventore aliquam fugiat, adipisci, soluta minima, illo esse tempora rem provident quasi! Autem molestiae vero tempore.",
  },
  {
    avatar: AVATAR2,
    name: "Body Master",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, quae sint minus voluptas doloremque itaque accusamus, aut accusantium consequuntur cum nisi eius voluptatibus nesciunt, ea corporis dolorem? Ratione neque inventore aliquam fugiat, adipisci, soluta minima, illo esse tempora rem provident quasi! Autem molestiae vero tempore.",
  },
  {
    avatar: AVATAR3,
    name: "Body Master",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, quae sint minus voluptas doloremque itaque accusamus, aut accusantium consequuntur cum nisi eius voluptatibus nesciunt, ea corporis dolorem? Ratione neque inventore aliquam fugiat, adipisci, soluta minima, illo esse tempora rem provident quasi! Autem molestiae vero tempore.",
  },
  {
    avatar: AVATAR4,
    name: "Body Master",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, quae sint minus voluptas doloremque itaque accusamus, aut accusantium consequuntur cum nisi eius voluptatibus nesciunt, ea corporis dolorem? Ratione neque inventore aliquam fugiat, adipisci, soluta minima, illo esse tempora rem provident quasi! Autem molestiae vero tempore.",
  },
  {
    avatar: AVATAR5,
    name: "Body Master",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, quae sint minus voluptas doloremque itaque accusamus, aut accusantium consequuntur cum nisi eius voluptatibus nesciunt, ea corporis dolorem? Ratione neque inventore aliquam fugiat, adipisci, soluta minima, illo esse tempora rem provident quasi! Autem molestiae vero tempore.",
  },
  {
    avatar: AVATAR6,
    name: "Body Master",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, quae sint minus voluptas doloremque itaque accusamus, aut accusantium consequuntur cum nisi eius voluptatibus nesciunt, ea corporis dolorem? Ratione neque inventore aliquam fugiat, adipisci, soluta minima, illo esse tempora rem provident quasi! Autem molestiae vero tempore.",
  },
];

const Testimonial = () => {
  return (
    <div id="testimonial">
      <div className="testimonial-container">
        <h1>Testimonial</h1>
      </div>
      <Swiper
        className="testimonial-me"
        //install Swiper modules
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial-content">
              <div className="client-avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client-name">{name}</h5>
              <small className="client-review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
