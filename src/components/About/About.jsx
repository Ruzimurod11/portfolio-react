import React from "react";
import s from "./About.module.css";

import AboutImg from "./../../assets/Images/about-1.webp";
import AwardImg from "./../../assets/Images/award-icon.535b13da.svg";

const About = () => {
   return (
      <div className={`${s.AboutWrapper} section`}>
         <marquee direction="left">
            <div className={s.marqueeTxt}>
               <h1>ABOUT ME 👋🖐 </h1>
               <h1>✨✨ MY WORK ( 2024 ) 💥👍 </h1>
               <h1>ABOUT ME 👋🖐 </h1>
               <h1>✨✨ MY WORK ( 2024 ) 💥👍 </h1>
            </div>
         </marquee>

         <div className={s.about_img}>
            <p className="section__title">About me</p>
            <div className={s.Img_container}>
               <img src={AboutImg} alt="About-img" />
            </div>
         </div>
         <div className={s.about_Content}>
            <div className={s.Award_container}>
               <img src={AwardImg} alt="Award-img" />
               <p>
                  Independent of The Year
                  <span>Annual Awards - Awards 2024</span>
               </p>
            </div>
            <h3>
               Hello I'm <span>Diago</span> a Self-taught & Award Wining
               <span> Designer & Developer </span>
               Lorem ipsum dolor sit amet consectetur
            </h3>
            <div className={s.ExperienceWrapper}>
               <div className={s.Experience}>
                  <h1>
                     180+ <span>Projects Completed</span>
                  </h1>
               </div>
               <div className={s.Experience}>
                  <h1>
                     13+ <span>Years of Experience</span>
                  </h1>
               </div>
               <div className={s.Experience}>
                  <h1>
                     40+ <span> Happy Clients </span>
                  </h1>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
