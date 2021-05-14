import Header from "./components/Header";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <Header titulo="Buscador de Noticias" />
      <div className="container white">
        <Formulario />
      </div>
    </>
  );
}

export default App;
