import React from "react";
import s from "./Skills.module.css";

import Figma from "./../../assets/Images/figma.webp";
import Sketch from "./../../assets/Images/sketch.webp";
import Photoshop from "./../../assets/Images/photoshop.webp";
import XD from "./../../assets/Images/xd.webp";
import Vue from "./../../assets/Images/vue.webp";
import Angular from "./../../assets/Images/angular.webp";

const Skills = () => {
   return (
      <div className={`${s.SkillsWrapper} section`}>
         <h3 className="section__title">Advantage</h3>
         <h1>Skills & Tools</h1>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
            recusandae voluptatum similique a.
         </p>

         <div className={s.ToolsWrapper}>
            <div className={s.ToolContainer}>
               <div className={s.Tool}>
                  <img src={Figma} alt="image" />
                  <h4>Figma</h4>
               </div>
               <div className={s.Tool}>
                  <img src={Sketch} alt="image" />
                  <h4>Sketch</h4>
               </div>
            </div>

            <div className={s.ToolContainer}>
               <div className={s.Tool}>
                  <img src={Photoshop} alt="image" />
                  <h4>Photoshop</h4>
               </div>
               <div className={s.Tool}>
                  <img src={XD} alt="image" />
                  <h4>XD</h4>
               </div>
            </div>

            <div className={s.ToolContainer}>
               <div className={s.Tool}>
                  <img src={Angular} alt="image" />
                  <h4>Angular</h4>
               </div>
               <div className={s.Tool}>
                  <img src={Vue} alt="image" />
                  <h4>Vue</h4>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Skills;
