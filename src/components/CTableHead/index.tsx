import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";

interface EnhancedTableProps {
  headCells: Array<any>;
}

const CTableHead = (props: EnhancedTableProps) => {
  const { headCells } = props;

  return (
    <TableHead className="ctable-head">
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
