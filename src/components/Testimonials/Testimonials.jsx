import React from "react";
import s from "./Testimonials.module.css";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import profile1 from "./../../assets/Images/user-1.jpg";
import profile2 from "./../../assets/Images/avata-2.png";
import profile3 from "./../../assets/Images/avata-3.png";
import profile4 from "./../../assets/Images/user-1.jpg";

import imgShape from "./../../assets/Images/quote.2175c2c2.svg";

const Testimonials = () => {
   return (
      <div className={`${s.testimonialWrapper} section`}>
         <div className={s.Content}>
            <h4 className="section__title">Testimonials</h4>
            <h1>What Our Clients say</h1>
            <p>Based on 2102 Reviews</p>
         </div>

         <div className={s.TestimonialContainer}>
            <div className={s.TestimonialContent}>
               <Swiper
                  className={s.swiper}
                  spaceBetween={30}
                  slidesPerView={1}
                  autoplay={{
                     delay: 1500,
                     disableOnInteraction: false,
                  }}
                  breakpoints={{
                     0: {
                        slidesPerView: 1,
                     },
                     1200: {
                        slidesPerView: 2,
                     },
                  }}
                  speed={1800}
                  loop={true}
                  modules={[Autoplay]}>
                  <SwiperSlide>
                     <div className={s.TestimonialContentCard}>
                        <img src={imgShape} alt="image" />
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Cum, sunt laboriosam consequuntur corrupti
                           explicabo eius.
                        </p>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className={s.TestimonialContentCard}>
                        <img src={imgShape} alt="image" />

                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Cum, sunt laboriosam consequuntur corrupti
                           explicabo eius.
                        </p>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className={s.TestimonialContentCard}>
                        <img src={imgShape} alt="image" />

                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Cum, sunt laboriosam consequuntur corrupti
                           explicabo eius.
                        </p>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className={s.TestimonialContentCard}>
                        <img src={imgShape} alt="image" />

                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Cum, sunt laboriosam consequuntur corrupti
                           explicabo eius.
                        </p>
                     </div>
                  </SwiperSlide>
               </Swiper>
            </div>
            <div className={s.Images}>
               <Swiper
                  className={s.swiper}
                  spaceBetween={30}
                  slidesPerView={3}
                  autoplay={{
                     delay: 2200,
                     disableOnInteraction: false,
                  }}
                  loop={true}
                  breakpoints={{
                     0: {
                        slidesPerView: 1,
                     },
                     940: {
                        slidesPerView: 2,
                     },
                     1200: {
                        slidesPerView: 3,
                     },
                  }}
                  speed={1800}
                  modules={[Autoplay]}>
                  <SwiperSlide>
                     <div className={s.TestimonialProfileCard}>
                        <img src={profile1} alt="profile" />
                        <h4>
                           Mahima Shrawt <span>CEO, ABC</span>
                        </h4>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className={s.TestimonialProfileCard}>
                        <img src={profile2} alt="profile" />
                        <h4>
                           Nancy Doe <span>Front-end Developer, Routeam</span>
                        </h4>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className={s.TestimonialProfileCard}>
                        <img src={profile3} alt="profile" />
                        <h4>
                           John Doe <span>Database Designer, Epam</span>
                        </h4>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className={s.TestimonialProfileCard}>
                        <img src={profile4} alt="profile" />
                        <h4>
                           Jessica Doe <span>UI / UX Designer</span>
                        </h4>
                     </div>
                  </SwiperSlide>
               </Swiper>
            </div>
         </div>
      </div>
   );
};

export default Testimonials;
