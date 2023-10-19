/** @format */

import "../App.css";
import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    console.log("hello in am constructor in news");
  }

  async componentDidMount() {
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&page=${this.state.page}&apiKey=7021ac3b50d247cbade3fa5e67894f43&pagesize=9`
    );
    let data = await response.json();
    console.log(data);
    this.setState({
      articles: data.articles,
      loading: false,
      page: 1,
      totalResults: data.totalResults,
    });
  }

  render() {
    let { mode, text, grey } = this.props;

    let next = async () => {
      let response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&page=${
          this.state.page + 1
        }&apiKey=7021ac3b50d247cbade3fa5e67894f43&pagesize=9`
      );
      let data = await response.json();
      this.setState({
        articles: data.articles,
        loading: false,
        page: this.state.page + 1,
      });
      window.scrollTo(0, 0);
    };
    let previous = async () => {
      let response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&page=${
          this.state.page - 1
        }&apiKey=7021ac3b50d247cbade3fa5e67894f43&pagesize=9`
      );
      let data = await response.json();

      this.setState({
        articles: data.articles,
        loading: false,
        page: this.state.page - 1,
      });
      window.scrollTo(0, 0);
    };
    return (
      <div className=' container'>
        <h1 className='text-center py-3'>NewsMonkey - Top headlines</h1>

        <div className='row '>
          {this.state.articles.map((element) => {
            return (
              <div
                key={element.imageUrl}
                className={`card bg-${mode} text-${text} col-md-4 `}
                style={{background:`${grey?mode==="dark":mode}`, color:"black"}}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
                  }
                  newsUrl={element.url}
                  mode={mode}
                  text={text}
                  grey={grey}
                />
              </div>
            );
          })}
        </div>

        <div className='container d-flex justify-content-between'>
          <button
            disabled={this.state.page <= 1}
            type='button'
            className={`btn btn-${text}`}
            onClick={previous}>
            &larr; Previous
          </button>
          {this.state.page}
          <button
            disabled={this.state.page >= this.state.totalResults / 9}
            type='button'
            className={`btn btn-${text}`}
            onClick={next}>
            next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
