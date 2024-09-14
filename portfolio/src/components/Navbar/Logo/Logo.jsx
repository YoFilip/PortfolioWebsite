import React from "react";
import icon from "../../../assets/light-mode-icon.svg";
import style from "./Logo.module.css";

function Logo() {
  return (
    <div>
      <img src={icon} alt="Icon" className={style.icon} />
    </div>
  );
}

export default Logo;
