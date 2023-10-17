import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";
import styled from "./SideBar.module.css";
const SideBar = () => {
  return (
    <div className={styled.fix}>
      <a
        className={styled.color3}
        target="_blank"
        rel="noreferrer"
        href="https://github.com/itzmiftah"
      >
        <AiFillGithub className={styled.color1} />
        <br />
      </a>
      <a
        className={styled.color3}
        target="_blank"
        rel="noreferrer"
        href="m"
      >
        <AiFillTwitterCircle className={styled.color} />
        <br />
      </a>{" "}
      <a
        className={styled.color3}
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/miftahul-islam-b794a817a/"
      >
        <AiFillLinkedin className={styled.color} />
        <br />
      </a>{" "}
      <a
        className={styled.color3}
        target="_blank"
        rel="noreferrer"
        href="mailto:miftahulislam138@gmail.com"
      >
        <AiFillMail className={styled.color} />
        <br />
      </a>
      <a
        className={styled.color3}
        target="_blank"
        rel="noreferrer"
        href="tel:7631451654"
      >
        <AiFillPhone className={styled.color} />
        <br />
      </a>
    </div>
  );
};

export default SideBar;
