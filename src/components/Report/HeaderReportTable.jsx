import React from "react";
import { TableHead, TableRow, TableCell } from "@material-ui/core";

const HeaderReportTable = ({ columns, subColumns }) => {
  return (
    <TableHead style={{ maxHeight: 15 }}>
      <TableRow>
        {columns.map((column, index) => {
          return (
            <TableCell
              colSpan={3}
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
