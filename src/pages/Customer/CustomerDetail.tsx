import { useAppDispatch, useAppSelector } from "app/hooks";
import { customerSelector } from "app/selectors";
import { DefaultUser } from "assets";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCustomerById } from "./customerSlice";
import { Paper, Typography, Avatar, Divider } from "@mui/material";
import CTable from "components/CTable";
import { BookingHeadCell } from "pages/model";
import { Box } from "@mui/system";
import CPagination from "components/CPagination";

const bookingHeadCells: BookingHeadCell[] = [
  { id: "bookingId", label: "Id" },
  { id: "bookingDatetime", label: "Booking datetime" },
  { id: "checkinDate", label: "Checkin" },
  { id: "checkoutDate", label: "Checkout" },
  { id: "numberOfGuests", label: "No. guests" },
  { id: "status", label: "Status" },
  { id: "totalPrice", label: "Price" },
];

const CustomerDetail = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { customerDetail } = useAppSelector(customerSelector);
  const { customerId = "" } = useParams();
  const { id, username, bookingReservations, ...detailInfo } = customerDetail;

  const bookingDataDisplay = bookingReservations.map((data) => {
    const {
      bookingDatetime,
      bookingId,
      checkinDate,
      checkoutDate,
      numberOfGuests,
      status,
      totalPrice,
    } = data;

    return {
      bookingId,
      bookingDatetime,
      checkinDate,
      checkoutDate,
      numberOfGuests,
      status,
      totalPrice,
    };
  });

  useEffect(() => {
    dispatch(getCustomerById(customerId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customerId]);

  return (
    <div className="customer-detail container-fluid">
      <div className="row">
        <div className="col-3">
          <Paper className="customer-detail__card h-100">
            <img src={DefaultUser} className="img-fluid" alt="default" />

            <div className="text-center">
              <p className="mb-1">{username}</p>
              <small>{id}</small>
            </div>
          </Paper>
        </div>

        <div className="col customer-detail__info">
          <Paper
            className="d-flex flex-column gap-3"
            sx={{ paddingX: 5, paddingY: 3 }}
          >
            {Object.entries(detailInfo).map(([key, value]) => (
              <div className="info-row" key={key}>
                <div className="info-row__label">{key}</div>
                <div className="info-row__content">{value}</div>
              </div>
            ))}
          </Paper>
        </div>
      </div>

      <Paper sx={{ width: "100%", mt: 3, borderRadius: 4 }}>
        <Box className="customer-header w-100 d-flex justify-content-between align-items-center p-3">
          <Typography component="h2">Booking Reservations Detail</Typography>
        </Box>
        <Divider />
        <CTable
          data={bookingDataDisplay}
          page={page}
          rowsPerPage={rowsPerPage}
          headCells={bookingHeadCells}
        />
        <CPagination
          maxLength={bookingDataDisplay.length}
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default CustomerDetail;
