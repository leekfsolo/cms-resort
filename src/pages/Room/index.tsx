import { IAddRoomTypeInput } from "pages/model";
import React from "react";
import RegisterForm from "./template/RegisterForm";

const Room = () => {
  const registerSections: IAddRoomTypeInput[] = [
    {
      label: "Name",
      id: "username",
      name: "roomtypeName",
      placeholder: "Enter the room name",
      type: "text",
    },
    {
      label: "Area",
      id: "area",
      name: "roomtypeArea",
      placeholder: "100",
      type: "number",
    },
    {
      label: "Max Guests Allowed",
      id: "guests",
      name: "roomtypeNoGuests",
      placeholder: "10",
      type: "number",
    },
    {
      label: "Bed Informations",
      id: "bedInfo",
      name: "bedinforSize",
      items: [
        {
          label: "Bed size",
          id: "bedSize",
          name: "bedinforSize",
          type: "number",
          placeholder: "Bed size (1.2 = 1m2)",
        },
        {
          label: "Bed quantity",
          id: "bedQuantity",
          name: "bedinforNoBeds",
          type: "number",
          placeholder: "Bed quantity",
        },
      ],
    },
    {
      label: "Other Description",
      id: "description",
      name: "roomtypeDescription",
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
