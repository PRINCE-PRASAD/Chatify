import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a User" />
      </div>
      <div className="userChat">
        <img
          src="https://www.jquery-az.com/html/images/banana.jpg"
          alt=""
          srcset=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
