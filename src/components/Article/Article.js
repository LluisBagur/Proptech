import React, { Component } from "react";
import "./Article.css";

class Article extends Component {
  render() {
    return (
      <div className="article">
        <div className='article-img'>
                <img className='article-img-logo' src={`./media/${this.props.article.img}`} alt=''></img>
            </div>
        <div className="article-text" />
          <h5>{this.props.article.title}</h5>
          <p>{this.props.article.text}</p>
        <div className="article-link-button">
            <a href={this.props.article.url}>Continue</a>
        </div>
      </div>
    );
  }
}

export default Article;