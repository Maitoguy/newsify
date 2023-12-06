// Favourite.js
import React from "react";
import { useSelector } from "react-redux";
import { newsSelector } from "../redux/reducers/newsReducer";

function Favourite() {
  
  const news = useSelector(newsSelector);

  return (
    <div className="favourite-container">
      <nav className="navbar">
        <div className="heading">
          <a href="/">Newsify</a>
        </div> 
      </nav>

      {news &&
        news.map((newsItem, index) => (
          <div key={index} className="news">
            <h3 className="title">{news.title}</h3>
            <p className="content">{news.content}</p>
          </div>
      ))}
      

    </div>
  );
}

export default Favourite;
