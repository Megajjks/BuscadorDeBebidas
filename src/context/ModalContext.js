import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

//Crear el context
export const ModalContext = createContext();

const ModalProvider = (props) => {
  //state del provider
  const [idReceta, setIdReceta] = useState(null);
  const [informacion, setinformacion] = useState({});

  //Una vez que tenemos una receta llamamos a la api
  useEffect(() => {
    const getReceta = async () => {
      if (!idReceta) return;

      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
      const { data } = await axios.get(url);
      setinformacion(data.drinks[0]);
    };
    getReceta();
  }, [idReceta]);

  return (
    <ModalContext.Provider
      value={{
        informacion,
        setIdReceta,
        setinformacion,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
