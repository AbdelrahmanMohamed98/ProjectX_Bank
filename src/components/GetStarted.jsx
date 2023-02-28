import React from "react";
import { arrowUp } from "../assets";
import styles from "../styles";

const GetStarted = () => (
  // to do//
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div
      className={`${styles.flexCenter} flex-col bg-primary hover:bg-secondary w-[100%] h-[100%] rounded-full `}>
      <div
        className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
          <span className="text-gradient hover:text-primary">
            Get
          </span>
        </p>
        <img
          src={arrowUp}
          className="w-[23px] h-[23px] object-contain"
          alt="arrow"
        />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px] hover:text-black">
        <span className="text-gradient  hover:text-black">
          Started
        </span>
      </p>
    </div>
  </div>
);

export default GetStarted;
