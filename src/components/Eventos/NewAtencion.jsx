import { generateTiempoAtencion } from "../../utils/generadores";
import { truncateValue } from "../Distributions/utils";

export const NewAtencion = (vectores, setVectores, action, setAction) => {
  let id = vectores.length - 1;
  let vectSelected = vectores.filter((item) => item.id === id);

  let newVectors = vectores.slice();

  let result = generateTiempoAtencion(vectSelected[0].tipo_auto.tipo);

  newVectors.map((item) => {
    if (item.id === id) {
      item.tiempo_atencion.rnd = result.rnd;
      item.tiempo_atencion.t_atencion = result.newTime;
      item.tiempo_atencion.fin_atencion = truncateValue(
        (item.t + result.newTime).toString()
      );
    }
  });
  getNewStateCabina(newVectors, id, setVectores, action, setAction);
};

const getNewStateCabina = (newVectors, id, setVectores, action, setAction) => {
  let copyVectors = newVectors.slice();
  let cabHabilitada = false;

  copyVectors.map((c) => {
    if (c.id === id) {
      c.cabinas.map((cab) => {
        if (cab.estado === "L" && cab.cola === 0) {
          cab.estado = "Oc";
          cabHabilitada = true;
        }
      });
      if (cabHabilitada) {
        c.cantCabinasHabil = c.cantCabinasHabil + 1;
      }
    }
  });
  setVectores(copyVectors);
  setAction({ ...action, tipo: "transicion" });
};
