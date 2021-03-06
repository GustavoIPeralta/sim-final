import React from "react";
import { TableHead, TableRow, TableCell } from "@material-ui/core";

const HeaderReportTable = ({ columns, subColumns, nroCabina }) => {
  const propColSpan = (column) => {
    if (column === "t") {
      return 1;
    } else {
      if (column === "Auxiliares") {
        return 2;
      } else {
        if (column !== "Cabina N") {
          return 3;
        } else {
          return nroCabina * 2;
        }
      }
    }
  };

  const propRowSpan = (column) => {
    if (column === "t") {
      return 2;
    } else {
      return 1;
    }
  };

  return (
    <TableHead style={{ maxHeight: 15 }}>
      <TableRow>
        {columns.map((column, index) => {
          return (
            <TableCell
              colSpan={propColSpan(column)}
              rowSpan={propRowSpan(column)}
              align="center"
              style={{
                backgroundColor: "#348AC7",
                color: "#fff",
                fontWeight: "bolder",
              }}
              key={index}
            >
              {column}
            </TableCell>
          );
        })}
      </TableRow>
      <TableRow>
        {subColumns.map((column, index) => {
          return (
            <TableCell
              align="center"
              style={{
                backgroundColor: "#348AC7",
                color: "#fff",
                fontWeight: "bolder",
              }}
              key={index}
            >
              {column}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default HeaderReportTable;
