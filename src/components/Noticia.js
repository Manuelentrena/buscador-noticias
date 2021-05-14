import React from "react";
import PropTypes from "prop-types";
import styles from "./Noticia.module.css";

const Noticia = ({ noticia }) => {
  const { url, title, description, publishedAt, source } = noticia;
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-content">
          <h3 className="flow-text">{title}</h3>
          <div className={styles.container_fecha}>
            <p className={styles.fecha}>{publishedAt}</p>
            <p className={styles.medio}>{source.name.toUpperCase()}</p>
          </div>

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
