import React from "react";
import { TableBody, TableRow, TableCell } from "@material-ui/core";

const BodyReportTable = ({ items, handleClickRow }) => {
  return (
    <TableBody>
      {items.map((item, index) => {
        return (
          <TableRow
            hover
            onClick={(event) => handleClickRow && handleClickRow(item)}
            key={index}
          >
            {Object.values(item).map((value, index) => {
              return (
                <TableCell key={index} align={"center"}>
                  {value}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default BodyReportTable;
