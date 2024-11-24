import React from "react";
import s from "./Projects.module.css";

import ProjectImg1 from "./../../assets/Images/portfolio-1.webp";
import ProjectImg2 from "./../../assets/Images/portfolio-2.webp";
import ProjectImg3 from "./../../assets/Images/portfolio-3.webp";

const Projects = () => {
   return (
      <div className={`section ${s.ProjectWrapper}`}>
         <marquee direction="left" className={s.marquee}>
            <div className={s.marqueeTxt}>
               <h1>MY PROJECTS</h1>
               <h1>MY WORK ( 2024 )</h1>
               <h1>MY PROJECTS</h1>
               <h1>MY WORK ( 2024 )</h1>
               <h1>MY PROJECTS </h1>
               <h1>MY WORK ( 2024 )</h1>
            </div>
         </marquee>

         <div className={s.projectLeftContainer}>
            <div className={s.Title}>
               <h3 className="section__title">Projects</h3>
               <h2>Latest Projects</h2>
            </div>

            <div className={s.Image}>
               <div className={s.ProjectImg}>
                  <img src={ProjectImg1} alt="Project-Img" />
               </div>
               <h4>
                  01 <i className="ri-arrow-right-line"></i> Branding
               </h4>
            </div>
            <button>View All Projects</button>
         </div>
         <div className={s.projectRightContainer}>
            <div className={s.Image}>
               <div className={s.ProjectImg}>
                  <img src={ProjectImg2} alt="Project-Img" />
               </div>
               <h4>
                  02 <i className="ri-arrow-right-line"></i> Branding
               </h4>
            </div>
            <div className={s.Image}>
               <div className={s.ProjectImg}>
                  <img src={ProjectImg3} alt="Project-Img" />
               </div>
               <h4>
                  03 <i className="ri-arrow-right-line"></i> Branding
               </h4>
            </div>
         </div>
      </div>
   );
};

export default Projects;
