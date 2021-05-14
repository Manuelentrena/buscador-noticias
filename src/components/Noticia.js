import React from "react";
import PropTypes from "prop-types";

const Noticia = ({ noticia }) => {
  const { urlToImage, url, title, description, publishedAt, source } = noticia;
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        {urlToImage ? (
          <div className="card-image">
            <img src={urlToImage} alt={title} />
            <span className="card-title teal">{source.name}</span>
          </div>
        ) : null}

        <div className="card-content">
          <p>{publishedAt}</p>
          <h3 className="flow-text">{title}</h3>
          <p>{description}</p>
        </div>

        <div className="card-action">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="waves-effect waves-light btn"
          >
            VER NOTICIA
          </a>
        </div>
      </div>
    </div>
  );
};

Noticia.propTypes = {
  noticia: PropTypes.object.isRequired,
};

export default Noticia;
