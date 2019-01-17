import React from "react";
import "./Article.css";

export function Article(props) {

    const { img, title, text, link } = props.article
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
            <a className="link" href={link}>LEARN MORE -></a>
        </div>
      </div>
    )
  }


