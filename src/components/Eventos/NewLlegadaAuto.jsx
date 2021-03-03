import {
  generateLlegadaAuto,
  generateTipoAuto,
  generateTiempoAtencion,
} from "../../utils/generadores";
import { truncateValue } from "../Distributions/utils";

export const NewLlegadaAuto = (vectores, setVectores, action, setAction) => {
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
        cola: 0,
      },
    ],
    cantCabinasHabil: 0,
    montoRecaudado: 0,
  };

  vect.t = action.tiempo;
  vect.id = vectores.length;
  vect.llegada_auto.rnd = result.rnd;
  vect.llegada_auto.tell = result.newTime;
  vect.llegada_auto.prox_llegada = truncateValue(
    (vect.t + vect.llegada_auto.tell).toString()
  );
  vect.tipo_auto.rnd = resultTipo.rnd;
  vect.tipo_auto.tipo = resultTipo.newTipo;
  vect.tipo_auto.costo = resultTipo.newCosto;

  newVectors.push(vect);

  newVectors.map((item) => {
    item.cabinas.map((cab) => {
      if (cab.estado === "L" && cab.cola === 0) {
        setAction({ ...action, tipo: "inicio_atencion" });
      } else if (cab.estado === "Oc" && cab.cola > 0 && cab.cola < 5) {
        cab.cola = cab.cola + 1;
      }
    });
  });
  setVectores(newVectors);
};
