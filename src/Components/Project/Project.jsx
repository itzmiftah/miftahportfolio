import React, { useState } from "react";
import styled from "./Project.module.css";
import { AiFillGithub } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import Modal from "react-modal";
import textutils from "../Images/textutils.png";
import todo from "../Images/todo.png";
const Project = () => {
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  return (
    <div id="project">
      <h1 className={styled.mid}>
        <span style={{ color: "orange" }}>My</span> Projects
      </h1>

      {/* Project no 1 adidas */}

      <div className={styled.width}>
        <div className={styled.left}>
          <img className={styled.img} src={textutils} alt="TextUtils" />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          <h2 style={{ color: "orange" }}>TextUtils</h2>
          <div className={styled.box}>
            
            <p>
            Textutils gives you a way to analyze your text quickly and efficently. It let you to count word, count charecters or reading time .
             TextUtils reports the number of words and charecter. Thus it is suitable for writing text with word / charecter limit.
              <p>It is Solo Project</p>
              <p onClick={() => setIsOpen3(true)} className={styled.blue}>
                Read More
              </p>
            </p>
            <Modal className={styled.background} isOpen={isOpen3}>
              <h1 style={{ color: "orange" }}>TextUtils</h1>
              <h4 className={styled.color}>It is Solo Project</h4>
              <p>
                Role:- Created Home, About page and Contact page
              </p>
              <p></p>
              <h5>Tech Stack : React || Javascript || HTML || CSS </h5>

              <button onClick={() => setIsOpen3(false)} className={styled.btn}>
                Close
              </button>
            </Modal>
          </div>
          <h5>Tech Stack : React || Javascript || HTML || CSS</h5>
          <div className={styled.flex}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://textutils-mif.vercel.app/"
              className={styled.size}
            >
              {" "}
              <AiFillGithub className={styled.size} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://textutils-mif.vercel.app/"
              className={styled.size}
            >
              <BiLink className={styled.size} />{" "}
            </a>
          </div>
        </div>
      </div>

      {/* project 2 */}

      <div className={styled.width}>
        <div className={styled.left}>
          <img className={styled.img} src={todo} alt="logo" />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          <h2 style={{ color: "orange" }}>Todo List</h2>
          <div className={styled.box}>
            
            <p>
            A to-do list is a simple and effective tool used to organize tasks, activities,
             and responsibilities.
              1.Task Entries
             2.Priority
             3.Due Dates and Deadlines 
             4.Notes and Descriptions 
             5.Time Management 
              <p onClick={() => setIsOpen2(true)} className={styled.blue}>
                Read More
              </p>
            </p>
            <Modal className={styled.background} isOpen={isOpen2}>
              <h1 style={{ color: "orange" }}>Todo List</h1>
              <p>
              A to-do list is a simple and effective tool used to organize tasks, activities,
             and responsibilities.
              1.Task Entries
             2.Priority
             3.Due Dates and Deadlines 
             4.Notes and Descriptions 
             5.Time Management 
              </p>
              <p></p>
              <h5>Tech Stack : React || Next || Javascripr || HTML || CSS </h5>

              <button onClick={() => setIsOpen2(false)} className={styled.btn}>
                Close
              </button>
            </Modal>
          </div>
          <h5>Tech Stack : React || Next || Javascripr || HTML || CSS</h5>
          <div className={styled.flex}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://todolist-mif.vercel.app/"
              className={styled.size}
            >
              {" "}
              <AiFillGithub className={styled.size} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://todolist-mif.vercel.app/"
              className={styled.size}
            >
              <BiLink className={styled.size} />{" "}
            </a>
          </div>
        </div>
      </div>

       
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default Project;
