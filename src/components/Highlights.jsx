import React from "react";
import "./ALL.css";
import  One from "../assets/1.jpeg";
import  Two from "../assets/2.jpeg";
import  Three from "../assets/3.jpeg";

const Highlight = () => {
  return (
    <div className="card-container">
      <div className="card">
      <a>India Won the  t20 WorldCup</a>

        <img src={One}></img>
        
      </div>
      <div className="card">
      <a>India Won the  t20 WorldCup</a>
        <img src={Two}></img>
        
      </div>
      <div className="card">
      <a>India Won the  t20 WorldCup</a>
      <img src={Three}></img>
      
      </div>
      <div className="card">
      <a>India Won the  t20WorldCup</a>
      <img src={One}></img>
      
      </div>
     
     
      
    </div>
  );
};

export default Highlight;
