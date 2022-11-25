import React, { useEffect, useState } from "react";
import { Box, Paper, Divider, Typography } from "@mui/material";

import CPagination from "components/CPagination";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { customerSelector } from "app/selectors";
import { getCustomers } from "./customerSlice";
import { CustomerHeadCell } from "pages/model";
import CTable from "components/CTable";
import CustomerSearch from "./CustomerSearch";
import { handleLoading } from "app/globalSlice";

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
    dispatch(handleLoading(true));
    try {
      const fetchData = async () => {
        await dispatch(getCustomers());
      };

      fetchData();
    } catch (e) {
      console.error(e);
    } finally {
      dispatch(handleLoading(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box className="customer" sx={{ width: "100%" }}>
      <CustomerSearch />

      <Paper sx={{ width: "100%", mb: 2, borderRadius: 4 }}>
        <Box className="customer-header w-100 d-flex justify-content-between align-items-center p-3">
          <Typography component="h2">Customer Management</Typography>
        </Box>
        <Divider />
        <CTable
          data={data}
          headCells={customerHeadCells}
          page={page}
          rowsPerPage={rowsPerPage}
        />
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
