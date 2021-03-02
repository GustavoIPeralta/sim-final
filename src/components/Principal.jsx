import React, { useState } from "react";
import ReportTable from "./Report/ReportTable";

export default function Principal({}) {
  const items = [
    { id: 1, nombre: "gustavo" },
    { id: 2, nombre: "Peralta" },
  ];
  const columns = ["ID", "Cliente"];
  const [loading, setLoading] = useState(false);

  return (
    <ReportTable items={items} columns={columns} loading={loading}>
      {/* Children */}
    </ReportTable>
  );
}
