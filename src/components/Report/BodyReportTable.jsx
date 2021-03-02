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
            <TableCell align={"center"}>{item.t}</TableCell>
            <TableCell align={"center"}>{item.llegada_auto.rnd}</TableCell>
            <TableCell align={"center"}>{item.llegada_auto.tell}</TableCell>
            <TableCell align={"center"}>
              {item.llegada_auto.prox_llegada}
            </TableCell>
            <TableCell align={"center"}>{item.tipo_auto.rnd}</TableCell>
            <TableCell align={"center"}>{item.tipo_auto.tipo}</TableCell>
            <TableCell align={"center"}>{item.tipo_auto.costo}</TableCell>
            <TableCell align={"center"}>{item.tiempo_atencion.rnd}</TableCell>
            <TableCell align={"center"}>
              {item.tiempo_atencion.t_atencion}
            </TableCell>
            <TableCell align={"center"}>
              {item.tiempo_atencion.fin_atencion}
            </TableCell>
            {item.cabinas.map((cabina, index) => {
              return (
                <React.Fragment>
                  <TableCell align={"center"}>{cabina.estado}</TableCell>
                  <TableCell align={"center"}>{cabina.cola}</TableCell>
                </React.Fragment>
              );
            })}
            <TableCell align={"center"}>{item.cantCabinasHabil}</TableCell>
            <TableCell align={"center"}>{item.montoRecaudado}</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default BodyReportTable;
// rnd_auto: vect.llegada_auto.rnd,
//       tell: vect.llegada_auto.tell,
//       prox_llegada: vect.llegada_auto.prox_llegada,
//       rnd_tipo_auto: vect.tipo_auto.rnd,
//       tipo: vect.tipo_auto.tipo,
//       costo: vect.tipo_auto.costo,
//       rnd_atencion: vect.tiempo_atencion.rnd,
//       t_atencion: vect.tiempo_atencion.t_atencion,
//       fin_atencion: vect.tiempo_atencion.fin_atencion,
//       cabinas: vect.cabinas,
//       cantCabinasHabil: vect.cantCabinasHabil,
//       montoRecaudado: vect.montoRecaudado,
