import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";
import { CustomerHeadCell } from "pages/model";

interface EnhancedTableProps {
  headCells: Array<CustomerHeadCell>;
}

const CTableHead = (props: EnhancedTableProps) => {
  const { headCells } = props;

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} align="left" padding="normal">
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default CTableHead;
