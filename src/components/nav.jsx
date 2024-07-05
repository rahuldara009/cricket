import React, { useState } from "react";
import "./ALL.css";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="Navtab">
      <div className="logo">
        CricketX
      </div>
      <div className={open ? 'open' : 'Nav-links'}>
        <a>Home</a>
        <a>Tickets</a>
        <a>Membership</a>
        <a>Matches</a>
        <a>SignIn</a>
      </div>
      <div className="toggle">
      <button className="togglebutton"onClick={toggle}>
        {open ? "X" : "Menu"} {/* Toggle button text based on state */}
      </button>
      </div>
      
    </div>
  );
};

export default Nav;
