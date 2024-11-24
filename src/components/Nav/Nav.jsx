import React, { useRef } from "react";
import s from "./Nav.module.css";

import logo from "./../../assets/Images/logo.png";

const Nav = () => {
   let menu = useRef();
   // let nav = useRef();

   const showMenu = () => {
      menu.current.classList.toggle(s.showMenu);
   };

   const HandleStickyNav = () => {
      document.querySelector(".nav").classList.add(s.bgmenu);
   };

   window.addEventListener("scroll", () => {
      if (window.scrollY) {
         HandleStickyNav();
      } else {
         document.querySelector(".nav").classList.remove(s.bgmenu);
      }
   });

   const DarkMode = () => {
      document.querySelector("body").setAttribute("data-theme", "dark");
      document.querySelector("#icon").setAttribute("class", "ri-moon-line");
   };

   const LightMode = () => {
      document.querySelector("body").setAttribute("data-theme", "light");
      document.querySelector("#icon").setAttribute("class", "ri-sun-line");
   };

   const toggleTheme = (e) => {
      if (
         document.querySelector("body").getAttribute("data-theme") === "null"
      ) {
         DarkMode();
      } else {
         if (
            document.querySelector("body").getAttribute("data-theme") === "dark"
         ) {
            LightMode();
         } else {
            DarkMode();
         }
      }
   };

   return (
      <div className={`${s.nav} nav`}>
         <div className={s.left_Nav_Container}>
            <div className={s.logo}>
               <img src={logo} alt="Logo" />
            </div>
            <ul ref={menu}>
               <li>
                  <a href="#">Home</a>
               </li>
               <li>
                  <a href="#">About</a>
               </li>
               <li>
                  <a href="#">Service</a>
               </li>
               <li>
                  <a href="#">Portfolio</a>
               </li>
               <li>
                  <a href="#">Blog</a>
               </li>
               <li>
                  <a href="#">Contact</a>
               </li>
            </ul>
         </div>
         <div className={s.Right_Nav_Container}>
            <div className={s.Theme} onClick={toggleTheme}>
               <i className="ri-moon-line" id="icon"></i>
            </div>
            <i className="ri-menu-3-line" id={s.Bars} onClick={showMenu}></i>
         </div>
      </div>
   );
};

export default Nav;
