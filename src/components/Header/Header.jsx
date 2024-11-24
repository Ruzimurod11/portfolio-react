import React from "react";
import s from "./../Header/Header.module.css";

import ShakeHand from "./../../assets/Images/hero-hand.webp";
import HeroIMG from "./../../assets/Images/hero-img.webp";
import Element1 from "./../../assets/Images/hero-shape-1.webp";
import Element2 from "./../../assets/Images/hero-shape-2.png";
import arrowTop from "./../../assets/Images/media-line-bottom.svg";
import arrowBottom from "./../../assets/Images/media-line-top.svg";

const Header = () => {
   return (
      <div className={`${s.Header} section`}>
         <div className={s.headerContent}>
            <span id={s.Heading}>
               Hello, There ! <img src={ShakeHand} alt="ShakeHand" />
            </span>
            <h1>
               I M Diago <br /> <span id={`${s.text} text`}></span> Designer
            </h1>
            <p>
               A Combination Of My Passion For Design , Code and Interaction Web
               Design World.
            </p>
            <button>Hire Me</button>
         </div>
         <div className={s.HeroIMG}>
            <img src={HeroIMG} alt="HeroIMG" id={s.heroimg} />
            <img src={Element1} alt="HeroIMG" id={s.Element1} />
            <img src={Element2} alt="HeroIMG" id={s.Element2} />
         </div>
         <div className={s.social}>
            <img src={arrowTop} alt="arrowtop" id={s.arrowBottom} />
            <i className="ri-facebook-line"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-twitter-x-line"></i>
            <i className="ri-github-line"></i>
            <img src={arrowBottom} alt="arrowbottom" id={s.arrowTop} />
         </div>
      </div>
   );
};

export default Header;
