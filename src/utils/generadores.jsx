import {
  exponentialDistribution,
  uniformDistribution,
  truncateValue,
} from "../components/Distributions/utils";
import { tiposAutos } from "../Data/index";

export const generateLlegadaAuto = () => {
  const rnd = truncateValue(Math.random().toString());
  const newTime = exponentialDistribution(2, rnd);

  return { rnd, newTime };
};

export const generateTipoAuto = () => {
  const rnd = truncateValue(Math.random().toString());
  let newTipo = "";
  let newCosto = "";

  for (let i = 0; i < tiposAutos.length; i++) {
    if (rnd >= tiposAutos[i].min && rnd <= tiposAutos[i].max) {
      newTipo = tiposAutos[i].tipo;
      newCosto = tiposAutos[i].costo;
    }
  }

  return { rnd, newTipo, newCosto };
};

export const generateTiempoAtencion = (tipoAuto) => {
  let tipoAutoSelect = tiposAutos.filter((item) => item.tipo === tipoAuto);
  const rnd = truncateValue(Math.random().toString());
  let newTime = "";

  if (tipoAuto !== 1) {
    newTime = uniformDistribution(
      tipoAutoSelect[0].minTiempo,
      tipoAutoSelect[0].maxTiempo,
      rnd
    );
  } else {
    newTime = tipoAutoSelect[0].tiempo;
  }
  return { rnd, newTime };
};
