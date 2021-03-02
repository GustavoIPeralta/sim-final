import React from "react";
import { TableHead, TableRow, TableCell } from "@material-ui/core";

const HeaderReportTable = ({ columns }) => {
  return (
    <TableHead style={{ maxHeight: 15 }}>
      <TableRow>
        {columns.map((column, index) => {
          return (
            <TableCell
              align="center"
              style={{
                backgroundColor: "#007bff",
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
