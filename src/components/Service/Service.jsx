import React, { useState } from "react";
import s from "./Service.module.css";

import img1 from "./../../assets/Images/logo_01.webp";
import img2 from "./../../assets/Images/logo_02.webp";
import img3 from "./../../assets/Images/logo_03.webp";
import img4 from "./../../assets/Images/logo_04.webp";
import img5 from "./../../assets/Images/logo_05.webp";

const Service = () => {
   const [active, setActive] = useState(null);

   const handler = (i) => {
      if (active === i) {
         return setActive(null);
      }
      setActive(i);
   };
   return (
      <div className={`section ${s.ServiceWrapper}`}>
         <div className={s.Service_Top_container}>
            <p>Trusted By Other Brands</p>
            <div className={s.Images_Brands}>
               <img src={img1} alt="image1" />
               <img src={img2} alt="image2" />
               <img src={img3} alt="image3" />
               <img src={img4} alt="image4" />
               <img src={img5} alt="image5" />
            </div>
         </div>
         <div className={s.Service_Bottom_container}>
            <div className={s.serviceContent}>
               <p className="section__title">Our Services</p>
               <h2>
                  Solution <br /> We Provide
               </h2>
               <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Saepe earum non sunt tenetur asperiores at? Dolores,
                  quibusdam!
               </p>
            </div>
            <div className={s.service_Questions_Wrapper}>
               {Questions?.map((item, i) => (
                  <div
                     key={i}
                     className={s.Service_question_wrapper}
                     onClick={() => {
                        handler(i);
                     }}>
                     <div>
                        <h3>
                           <sub> {item.sub} </sub>
                           {item.Title}
                        </h3>
                     </div>
                     <div
                        className={`${active === i ? s.showAnswer : s.answer}`}>
                        <p> {item.Desc} </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

const Questions = [
   {
      id: 1,
      sub: 0.1,
      Title: "UI/ UX Design",
      Desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe earum Lorem ipsum dolor sit amet consectetur, adipisicing ",
   },
   {
      id: 2,
      sub: 0.2,
      Title: "Web Design",
      Desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe earum Lorem ipsum dolor sit amet consectetur, adipisicing ",
   },
   {
      id: 3,
      sub: 0.3,
      Title: "Mobile App Design",
      Desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe earum Lorem ipsum dolor sit amet consectetur, adipisicing ",
   },
   {
      id: 4,
      sub: 0.4,
      Title: "Branding",
      Desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe earum Lorem ipsum dolor sit amet consectetur, adipisicing ",
   },
];

export default Service;
