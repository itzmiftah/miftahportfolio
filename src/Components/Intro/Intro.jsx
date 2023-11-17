import React from "react";
import styled from "./Intro.module.css";
// import { Link } from "react-scroll";
import TypeWriter from "../TypeWriter/TypeWriter";
const Intro = () => {
  return (
    
    <div id="intro">
      <h1 className={styled.h1}>About <span style={{ color: "orange" }}>Me</span></h1>
      <h3 className={styled.color}>Hi, My Name is</h3>
      <p className={styled.fontS}><span style={{ color: "orange" }}>Md</span> Miftahul Islam</p>
      <p className={styled.fontS2}>
        <TypeWriter />
      </p>
      <h3 className={styled.left}>
        My name is <span style={{ color: "orange" }}>Md Miftahul Islam</span>, I am a Front-End Web developer 
        having experience of solving problems.
        self-attained skill set which contains most used and compatible JS
        framework - React JS.
      </h3>
      <a
        className={styled.img}
        target="_blank" rel="noreferrer"
        href="https://www.linkedin.com/in/miftahul-islam-b794a817a/"
      >
        <button className={styled.btn}>Let's Chat</button>
      </a>
      <a
        className={styled.img}
        target="_blank" rel="noreferrer"
        href="https://drive.google.com/file/d/1GSmno9-VP33A4P3KEnZl057B1oZVyhN9/view?usp=drive_link"
        download
      >
        <button className={styled.btn}>See My Resume</button>
      </a>
    </div>
  );
};

export default Intro;
