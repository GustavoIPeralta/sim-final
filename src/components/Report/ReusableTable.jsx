import React from "react";
import { TableContainer, Table } from "@material-ui/core";
import HeaderReportTable from "./HeaderReportTable";
import BodyReportTable from "./BodyReportTable";
import Spinner from "./Spinner";
import NoResults from "./NoResults";

const ReusableTable = ({
  subColumns,
  loading,
  columns,
  items,
  handleClickRow,
  noResults,
  children,
}) => {
  return (
    <>
      {children}
      <TableContainer style={{ maxHeight: "calc(100vh - 350px)" }}>
        <Table
          name="report-table"
          stickyHeader
          size="small"
          aria-label="a dense table"
        >
          <HeaderReportTable columns={columns} subColumns={subColumns} />
          {!loading ? (
            <BodyReportTable items={items} handleClickRow={handleClickRow} />
          ) : null}
        </Table>
      </TableContainer>
      {loading ? (
        <div className={"mt-5"}>
          <Spinner color="#66b3ff" type="spin" />
        </div>
      ) : items.length === 0 ? (
        <NoResults noResult={noResults} />
      ) : null}
    </>
  );
};

export default ReusableTable;
