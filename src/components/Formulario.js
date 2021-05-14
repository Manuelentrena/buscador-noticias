import React from "react";
import styles from "./Formulario.module.css";
import PropTypes from "prop-types";
import useSelect from "../hooks/useSelect";

const Formulario = ({ setCategoria, InicialCategoria }) => {
  //categorias de noticias
  const OPCIONES = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
  ];
  //Utilizar custom hook useSelect
  const [categoria, SelectNoticias] = useSelect(InicialCategoria, OPCIONES);

  //submit al form, pasar categori al App.js
  const buscarNoticias = (e) => {
    e.preventDefault();
    setCategoria(categoria);
  };

  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={buscarNoticias}>
          <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>
          <SelectNoticias />
          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles.btn_block} btn-large amber darken-2`}
              value="Buscar"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

Formulario.propTypes = {
  setCategoria: PropTypes.func.isRequired,
  InicialCategoria: PropTypes.string,
};

export default Formulario;
