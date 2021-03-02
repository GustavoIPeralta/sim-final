//Componente con distribución exponencial y uniforme

export const exponentialDistribution = (media, rnd) => {
  const result = -media * Math.log(1 - rnd);

  return truncateValue(result.toString());
};

export const uniformDistribution = (a, b, rnd) => {
  const result = rnd * (b - a) + a;

  return truncateValue(result.toString());
};

export const truncateValue = (value) => {
  const newValue = value.split(".");
  const newValueDecimal = newValue[1] ? newValue[1].substr(0, 2) : "0";
  const finalValue = newValue[0].concat(".", newValueDecimal);

  return Number(finalValue);
};
