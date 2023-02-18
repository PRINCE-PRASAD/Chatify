import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chatify</span>
      <div className="user">
        <img src="https://www.jquery-az.com/html/images/banana.jpg" alt=""/>
        <span>Prince</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
