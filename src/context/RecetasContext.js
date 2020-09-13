import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  const [recetas, setRecetas] = useState([]);
  const [busqueda, buscarRecetas] = useState({
    nombre: "",
    categoria: "",
  });
  const [consultar, setConsultar] = useState(false);

  useEffect(() => {
    if (consultar) {
      const findRecetas = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${busqueda.nombre}&c=${busqueda.categoria}`;
        const res = await axios.post(url);
        setRecetas(res.data.drinks);
        setConsultar(false);
      };
      findRecetas();
    }
  }, [busqueda]);

  return (
    <RecetasContext.Provider value={{ recetas, buscarRecetas, setConsultar }}>
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
