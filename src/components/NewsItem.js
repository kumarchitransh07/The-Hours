import React from "react";

const NewsItem = (props) => {
  let { title, description, imageurl, newsurl, author, date, source } = props;
  return (
    <div>
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageurl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              <span
                className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                style={{ left: "90%", zIndex: "1" }}
              >
                {source}
              </span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on {date}
              </small>
            </p>
            <a
              href={newsurl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
