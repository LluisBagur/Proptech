import React, { Component } from "react";
import "./Article.css";

class Article extends Component {

  render() {
    const { img, title, text, link } = this.props.article
    const logo = require(`./media/${img}`)
    return (
      <div className="article">
        <div className='article-img'>
                <img className='article-img-logo' src={logo} alt=''></img>
            </div>
        <div className="article-text" />
          <h5>{title}</h5>
          <p>{text}</p>
        <div className="article-link-button">
            <a href={link}>LEARN MORE -></a>
        </div>
      </div>
    );
  }
}

export default Article;