import React from "react";
import { News } from "../static/News";
import { Link } from "react-router-dom";
import { Category } from "../static/News";

function BottomNews(props) {
  const findCatName = (catId) => {
    let cat = Category.find((category) => category.id === catId);
    return cat.name;
  };
  return (
    <>
      <div>
        {props.category === "0" ? (
          <div>
            {News.map((news) => {
              return (
                <div
                  className="card p-3 mb-5  w-100"
                  key={news.id + news.category}
                >
                  <div className="container">
                    <div className="row ">
                      <img
                        src={news.image}
                        className="card-img-top mb-2 "
                        alt="..."
                      />
                      <div className="col col-lg-9 ">
                        <h2 className="card-title">{news.headline}</h2>
                        <p className="card-text">{news.short_description}</p>
                        <p className="text-primary">{news.authors}</p>
                        <Link to={news.link}>
                          <small className="text-body-secondary text-secondary">
                            {news.link}≫
                          </small>
                        </Link>
                      </div>
                      <div className="col col-lg-3">
                        <p className="card-text text-end">{news.date}</p>
                        <p className="me-0 text-end">
                          <span
                            className="badge text-bg-primary me-0"
                            onClick={() => props.onclick(news.category)}
                          >
                            {findCatName(news.category)}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            {News.filter((news) => news.category === props.category).map(
              (news) => (
                <div className="card  p-3 mb-5 w-100" key={news.id}>
                  <div className="container">
                    <div className="row">
                      <img
                        src={news.image}
                        className="card-img-top mb-2"
                        alt="..."
                      />
                      <div className="col col-lg-9">
                        <h4 className="card-title">{news.headline}</h4>
                        <p className="card-text">{news.short_description}</p>
                        <p className="text-primary">{news.authors}</p>
                        <Link to={news.link}>
                          <small className="text-body-secondary text-secondary">
                            {news.link}≫
                          </small>
                        </Link>
                      </div>
                      <div className="col col-lg-3">
                        <p className="card-text text-end">{news.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </>
  );
}
export default BottomNews;
