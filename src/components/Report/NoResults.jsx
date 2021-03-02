import React from "react";
import notfound from "../Images/notfound.png";

const NoResults = ({ noResult }) => {
  return (
    <div className={"mt-4 text-center p-3"}>
      <img src={notfound} alt={"No se encuentran resultados"} />
      <h5>{noResult || "No se encontraron resultados para su búsqueda."}</h5>
    </div>
  );
};

export default NoResults;
