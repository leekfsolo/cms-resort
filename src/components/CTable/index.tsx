import React from "react";
import CTableHead from "components/CTableHead";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
} from "@mui/material";

interface Props {
  page: number;
  rowsPerPage: number;
  data: any[];
  headCells: any[];
  viewData?: (id: string) => void;
}

const CTable = (props: Props) => {
  const { data, headCells, page, rowsPerPage, viewData } = props;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleClickOnRow = (id: string) => {
    if (viewData) {
      viewData(id);
    }
  };

  return (
    <TableContainer>
      <Table
        aria-labelledby="customer"
        size="medium"
        sx={{ borderCollapse: "collapse" }}
      >
        <CTableHead headCells={headCells} />
        <TableBody>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {
              return (
                <TableRow
                  onClick={() => handleClickOnRow(row.customerId)}
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.customerId}
                  sx={{ cursor: "pointer" }}
                >
                  {Object.keys(row).map((cell: any, idx) => {
                    return (
                      <TableCell key={`cell-${cell}-${idx}`} align="left">
                        {row[cell]}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          {emptyRows > 0 && (
            <TableRow
              style={{
                height: 53 * emptyRows,
              }}
            >
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CTable;
