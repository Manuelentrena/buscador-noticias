import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {
  //definir el state de la categoria
  const [categoria, setCategoria] = useState("general");
  const [noticias, setNoticias] = useState([]);

  //Peticion API de noticas
  useEffect(() => {
    const consultarAPI = async () => {
      const KEY = "5c374784c1f347178b1c7ea13fbd8443";
      const url = `https://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=${KEY}`;

      const respuesta = await fetch(url);
      const data = await respuesta.json();
      setNoticias(data.articles);
    };
    consultarAPI();
  }, [categoria]);

  return (
    <>
      <Header titulo="Buscador de Noticias" />
      <div className="container white">
        <Formulario setCategoria={setCategoria} categoria={categoria} />
        <ListadoNoticias noticias={noticias} />
      </div>
    </>
  );
}

export default App;
