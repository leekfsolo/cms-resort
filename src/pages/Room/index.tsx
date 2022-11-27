import { IAddRoomTypeInput } from "pages/model";
import React from "react";
import RegisterForm from "./template/RegisterForm";

const Room = () => {
  const registerSections: IAddRoomTypeInput[] = [
    {
      label: "Name",
      id: "username",
      name: "roomTypeName",
      placeholder: "Enter the room name",
      type: "text",
    },
    {
      label: "Area",
      id: "area",
      name: "area",
      placeholder: "100",
      type: "number",
    },
    {
      label: "Max Guests Allowed",
      id: "guests",
      name: "maxGuests",
      placeholder: "10",
      type: "number",
    },
    {
      label: "Bed Informations",
      id: "bedInfo",
      name: "bedInfo",
      items: [
        {
          label: "Bed size",
          id: "bedSize",
          name: "bedSize",
          type: "number",
          placeholder: "Bed size (m2)",
        },
        {
          label: "Bed quantity",
          id: "bedQuantity",
          name: "bedQuantity",
          type: "number",
          placeholder: "Bed quantity",
        },
      ],
    },
    {
      label: "Other Description",
      id: "description",
      name: "otherDescription",
      placeholder: "Give some aside description of the room type...",
      type: "text",
    },
  ];

  return (
    <div className="register">
      <div className="register-section__title">
        <h4>Room Type Configuration</h4>
      </div>
      <RegisterForm registerSections={registerSections} />
    </div>
  );
};

export default Room;
