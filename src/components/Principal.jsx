import React, { useState, useEffect } from "react";
import ReportTable from "./Report/ReportTable";
import { Button } from "@material-ui/core";

export default function Principal({}) {
  const [nroCabina, setNroCabina] = useState(1);
  const items = [
    { id: 1, nombre: "gustavo" },
    { id: 2, nombre: "Peralta" },
  ];
  const [columns, setColumns] = useState([
    "t",
    "Llegada auto",
    "Tipo auto",
    "Tiempo atención",
    "Cabina N",
    "Cant cabinas habil.",
    "Monto recaudado",
  ]);
  const [subColumns, setSubColumns] = useState([
    "rnd",
    "tell",
    "prox_llegada",
    "rnd",
    "Tipo",
    "Costo",
    "rnd",
    "t_atención",
    "prox_atención",
    "Estado",
    "Cola",
  ]);
  const [loading, setLoading] = useState(false);

  const addCabina = () => {
    let newSubColumns = subColumns.slice();
    newSubColumns.push("Estado", "Cola");

    setSubColumns(newSubColumns);
    setNroCabina(nroCabina + 1);
  };

  return (
    <ReportTable
      items={items}
      columns={columns}
      subColumns={subColumns}
      loading={loading}
      nroCabina={nroCabina}
    >
      <Button variant="contained" onClick={addCabina}>
        Default
      </Button>
    </ReportTable>
  );
}
