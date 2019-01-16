import React, { Component } from "react";
import "./Article.css";

class Article extends Component {
  render() {
    return (
      <div className="article">
        <div className='article-img'>
                <img className='article-img-logo' src={props.image} alt=''></img>
            </div>
        <div className="article-text" />
          <h5>{props.title}</h5>
          <p>{props.text}</p>
        <div className="article-link-button">
            <a href="/link/to/page2">Continue</a>
        </div>
      </div>
    );
  }
}

export default Article;