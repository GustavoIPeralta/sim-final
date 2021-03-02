import React, { useState, useEffect } from "react";
import ReportTable from "./Report/ReportTable";
import { Button } from "@material-ui/core";
import {
  exponentialDistribution,
  uniformDistribution,
  truncateValue,
} from "./Distributions/utils";
import { initialData, filterItems } from "../utils/utils";

export default function Principal({}) {
  const [nroCabina, setNroCabina] = useState(1);
  const [vectores, setVectores] = useState(initialData);
  const [columns, setColumns] = useState([
    "t",
    "Llegada auto",
    "Tipo auto",
    "Tiempo atención",
    "Cabina N",
    "Auxiliares",
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
    "fin_atención",
    "Estado",
    "Cola",
    "Cant cabinas habil.",
    "Monto recaudado",
  ]);
  const [loading, setLoading] = useState(false);

  const addCabina = () => {
    let newSubColumns = subColumns.slice(0, -2);
    newSubColumns.push(
      "Estado",
      "Cola",
      "Cant cabinas habil.",
      "Monto recaudado"
    );
    setSubColumns(newSubColumns);
    setNroCabina(nroCabina + 1);
  };

  useEffect(() => {
    // setLoading(true);
    generateLlegadaAuto();
  }, []);

  const generateLlegadaAuto = () => {
    const rnd = truncateValue(Math.random().toString());
  };

  return (
    <ReportTable
      items={vectores}
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
