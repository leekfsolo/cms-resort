import React, { useEffect, useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TextField,
  InputAdornment,
} from "@mui/material";

import CTableHead from "components/CTableHead";
import CPagination from "components/CPagination";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { customerSelector } from "app/selectors";
import { getCustomers } from "./customerSlice";
import { CustomerHeadCell } from "pages/model";

const customerHeadCells: CustomerHeadCell[] = [
  { id: "id", label: "Id" },
  { id: "CCCD", label: "CCCD" },
  { id: "fullname", label: "Fullname" },
  { id: "phone", label: "Phone number" },
  { id: "mail", label: "Mail" },
  { id: "username", label: "Username" },
  { id: "score", label: "Score" },
  { id: "type", label: "Type" },
];

export default function Customer() {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { data } = useAppSelector(customerSelector);

  useEffect(() => {
    dispatch(getCustomers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <TextField
        label="Search Customer"
        id="search customer"
        sx={{ width: "30%", marginBottom: 2 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Paper sx={{ width: "100%", mb: 2 }}>
        <Box className="w-100">
          <h1>Customer</h1>
        </Box>
        <TableContainer>
          <Table aria-labelledby="customer" size="medium">
            <CTableHead headCells={customerHeadCells} />
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {Object.values(row).map((cell, idx) => (
                        <TableCell key={`cell-${idx}`} align="left">
                          {cell}
                        </TableCell>
                      ))}
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
        <CPagination
          maxLength={data.length}
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
