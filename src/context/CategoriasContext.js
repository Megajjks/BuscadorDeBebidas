import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

//crear el context
export const CategoriasContext = createContext();

//provider es donde se encuentran la funciones y el state (useState o useReducer)

const CategoriasProvider = (props) => {
  //Crear el state del context
  const [categorias, setCategorias] = useState([]);

  //ejecutar el llamado a la api
  useEffect(() => {
    const getCategorias = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const res = await axios.get(url);
      setCategorias(res.data.drinks);
    };
    getCategorias();
  }, []);

  return (
    <CategoriasContext.Provider value={{ categorias }}>
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
