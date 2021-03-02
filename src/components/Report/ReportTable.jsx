import React from "react";
import { Card, CardContent, Grid } from "@material-ui/core";
import ReusableTable from "./ReusableTable";

const ReportTable = ({ items, columns, loading, handleClickRow, children }) => {
  return (
    <Card className="pd-5">
      <CardContent>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            {children}
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item sm={12} className={"text-center"}>
            <ReusableTable
              columns={columns}
              items={items}
              loading={loading}
              handleClickRow={handleClickRow}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ReportTable;
