import React, { useState } from "react";

const useSelect = (stateInicial, opciones) => {
  //Inicializar el select
  const [state, setState] = useState("");

  const SelectNoticias = () => (
    <select className="browser-default">
      <option value="">-- Selecciona la Categoria --</option>
    </select>
  );

  return [state, SelectNoticias];
};

export default useSelect;
