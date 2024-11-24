import React from "react";
import s from "./Awards.module.css";

import AwardImg1 from "./../../assets/Images/award-1.jpg";
import AwardImg2 from "./../../assets/Images/award-3.jpg";
import AwardImg3 from "./../../assets/Images/award-4.jpg";
import AwardImg4 from "./../../assets/Images/award-5.jpg";
import AwardImg5 from "./../../assets/Images/award-6.jpg";

const Awards = () => {
   return (
      <div className={`${s.awardsWrapper} section`}>
         <div className={s.Content}>
            <h4 className="section__title">Awards</h4>
            <h1>Awards & Recognitions</h1>
         </div>
         <div className={s.AwardsContainer}>
            <div className={s.Awards}>
               <img src={AwardImg1} alt="image" />
               <h4>
                  Award Sold <span>FOR DISPLAY 2024</span>
               </h4>
               <i className="ri-arrow-right-line"></i>
            </div>
            <div className={s.Awards}>
               <img src={AwardImg2} alt="image" />
               <h4>
                  WIX.com <span>INTERVIEW 2022</span>
               </h4>
               <i className="ri-arrow-right-line"></i>
            </div>
            <div className={s.Awards}>
               <img src={AwardImg3} alt="image" />
               <h4>
                  CSS AWARDS <span>FEATURE 2021</span>
               </h4>
               <i className="ri-arrow-right-line"></i>
            </div>
            <div className={s.Awards}>
               <img src={AwardImg4} alt="image" />
               <h4>
                  CSS AWARDS <span>FEATURE 2020</span>
               </h4>
               <i className="ri-arrow-right-line"></i>
            </div>
            <div className={s.Awards}>
               <img src={AwardImg5} alt="image" />
               <h4>
                  WIX.com <span>INTERVIEW 2019</span>
               </h4>
               <i className="ri-arrow-right-line"></i>
            </div>
         </div>
      </div>
   );
};

export default Awards;
