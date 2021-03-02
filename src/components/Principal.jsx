import React, { useState } from "react";
import ReportTable from "./Report/ReportTable";

export default function Principal({}) {
  const items = [
    { id: 1, nombre: "gustavo" },
    { id: 2, nombre: "Peralta" },
  ];
  const columns = ["Llegada auto", "Tipo auto", "Tiempo atención", "Cabina N"];
  const subColumns = [
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
  ];
  const [loading, setLoading] = useState(false);

  return (
    <ReportTable
      items={items}
      columns={columns}
      subColumns={subColumns}
      loading={loading}
    >
      {/* Children */}
    </ReportTable>
  );
}
