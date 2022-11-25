import { useAppDispatch, useAppSelector } from "app/hooks";
import { customerSelector } from "app/selectors";
import { DefaultUser } from "assets";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCustomerById } from "./customerSlice";
import { Paper } from "@mui/material";
import { Avatar } from "@chatscope/chat-ui-kit-react";

const CustomerDetail = () => {
  const dispatch = useAppDispatch();
  const { customerDetail } = useAppSelector(customerSelector);
  const { customerId = "" } = useParams();
  const {
    CCCD,
    fullname,
    id,
    mail,
    phone,
    score,
    type,
    username,
    bookingReservations,
  } = customerDetail;

  useEffect(() => {
    dispatch(getCustomerById(customerId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customerId]);

  return (
    <div className="customer-detail container-fluid">
      <div className="row">
        <div className="col-3">
          <Paper className="customer-detail__card h-100">
            <Avatar src={DefaultUser} />

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
            <div className="info-row">
              <div className="info-row__label">CCCD</div>
              <div className="info-row__content">{CCCD}</div>
            </div>

            <div className="info-row">
              <div className="info-row__label">fullname</div>
              <div className="info-row__content">{fullname}</div>
            </div>

            <div className="info-row">
              <div className="info-row__label">mail</div>
              <div className="info-row__content">{mail}</div>
            </div>

            <div className="info-row">
              <div className="info-row__label">phone</div>
              <div className="info-row__content">{phone}</div>
            </div>

            <div className="info-row">
              <div className="info-row__label">score</div>
              <div className="info-row__content">{score}</div>
            </div>

            <div className="info-row">
              <div className="info-row__label">type</div>
              <div className="info-row__content">{type}</div>
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetail;
