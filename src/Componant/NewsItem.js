/** @format */
import "../App.css";
import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, text } = this.props;
    return (
      <div className='my-3 w-25'>
        <div className={``} style={{ width: "18rem" }}>
          <img
            className='card-img-top'
            src={imageUrl}
            alt='not found'
            height={200}
          />
          <div className='card-body'>
            <h5 className='card-title'>{title ? title : " "}</h5>
            <p className='card-text'>{description ? description : " "}</p>
            <a
              href={newsUrl}
              target='_blank'
              rel='noreferrer'
              className={`btn btn-${text}`}>
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
