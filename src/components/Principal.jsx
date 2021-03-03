import React, { useState, useEffect } from "react";
import ReportTable from "./Report/ReportTable";
import { Button } from "@material-ui/core";
import { initialData } from "../utils/utils";
import {
  generateLlegadaAuto,
  generateTipoAuto,
  generateTiempoAtencion,
} from "../utils/generadores";

export default function Principal({}) {
  const [nroCabina, setNroCabina] = useState(1);
  const [vectores, setVectores] = useState(initialData);
  const [action, setAction] = useState({ tipo: "", tiempo: "" });
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
    let newVector = vectores.slice();

    newVector[0].cabinas.push({ id: nroCabina, estado: "L", cola: "0" });

    let newSubColumns = subColumns.slice(0, -2);
    newSubColumns.push(
      "Estado",
      "Cola",
      "Cant cabinas habil.",
      "Monto recaudado"
    );
    setSubColumns(newSubColumns);
    setNroCabina(nroCabina + 1);
    setVectores(newVector);
  };

  useEffect(() => {
    setLoading(true);
    let result = generateLlegadaAuto();
    let copyVectors = vectores.slice();

    copyVectors[0].llegada_auto.rnd = result.rnd;
    copyVectors[0].llegada_auto.tell = result.newTime;
    copyVectors[0].llegada_auto.prox_llegada = result.newTime;

    setVectores(copyVectors);
    setAction({ tipo: "llegadaAuto", tiempo: result.newTime });
    setLoading(false);
  }, []);

  useEffect(() => {
    if (action.tipo !== "") {
      if (action.tipo === "llegadaAuto") {
        getNewVectorLlegada();
      } else {
        getNewAtencion();
      }
    }
  }, [action]);

  const getNewVectorLlegada = () => {
    let result = generateLlegadaAuto();
    let resultTipo = generateTipoAuto();
    let newVectors = vectores.slice();

    const vect = {
      id: 0,
      t: 0.0,
      llegada_auto: {
        rnd: "--",
        tell: "--",
        prox_llegada: "--",
      },
      tipo_auto: {
        rnd: "--",
        tipo: "--",
        costo: "--",
      },
      tiempo_atencion: {
        rnd: "--",
        t_atencion: "--",
        fin_atencion: "--",
      },
      cabinas: [
        {
          id: 0,
          estado: "L",
          cola: "0",
        },
      ],
      cantCabinasHabil: 0,
      montoRecaudado: 0,
    };

    vect.t = action.tiempo;
    vect.id = vectores.length;
    vect.llegada_auto.rnd = result.rnd;
    vect.llegada_auto.tell = result.newTime;
    vect.llegada_auto.prox_llegada = vect.t + vect.llegada_auto.tell;
    vect.tipo_auto.rnd = resultTipo.rnd;
    vect.tipo_auto.tipo = resultTipo.newTipo;
    vect.tipo_auto.costo = resultTipo.newCosto;

    newVectors.push(vect);
    setVectores(newVectors);
    setAction({ ...action, tipo: "atencion" });
  };

  const getNewAtencion = () => {
    let id = vectores.length - 1;
    let tipoAuto = "";

    vectores.map((vect) => {
      if (vect.id === id) {
        tipoAuto = vect.tipo_auto.tipo;
      }
    });
    let result = generateTiempoAtencion(tipoAuto);
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
