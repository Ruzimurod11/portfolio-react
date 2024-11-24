import React from "react";
import s from "./Footer.module.css";

const Footer = () => {
   return (
      <footer className={`${s.footerWrapper} section`}>
         <h1>Let's Talk About Next Big Thing</h1>
         <div className={s.buttons}>
            <button className={s.button1}>Write A Message</button>
            <button className={s.button2}>Discuss A Project</button>
         </div>

         <div className={s.socialMedia}>
            <div className={s.Social}>
               <h2>
                  Facebook <span>@Facebook_user</span>
               </h2>
               <i className="ri-facebook-line"></i>
            </div>
            <div className={s.Social}>
               <h2>
                  Dribbble <span>@Dribbble_user</span>
               </h2>
               <i className="ri-dribbble-line"></i>
            </div>
            <div className={s.Social}>
               <h2>
                  Instagram <span>@Instagram_user</span>
               </h2>
               <i className="ri-instagram-line"></i>
            </div>
         </div>

         <div className={s.shape}></div>
      </footer>
   );
};

export default Footer;
