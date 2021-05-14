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
      const KEY = "55f53eeb49e5b634d4d7737a609e4b25";
      const url = `https://gnews.io/api/v4/search?q=${categoria}&country=es&token=${KEY}`;

      const respuesta = await fetch(url);
      const data = await respuesta.json();
      console.log(data);
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
