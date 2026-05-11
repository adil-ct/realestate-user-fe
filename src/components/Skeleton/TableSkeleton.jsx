import React, { useState } from "react";
import { nanoid } from "nanoid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Skeleton } from "@mui/material";

// Static import
import styles from "views/accounts/style/style";

const CreateSkelton = (row, column) => {
  const jsobj = {};
  return {
    column,
    row: column?.map((item) => {
      jsobj[`${item}`] = (
        <Skeleton variant="text" animation="wave" sx={{ height: 40 }} />
      );
      return jsobj;
    }),
  };
};

const TableSkeleton = ({ column, row, dynamicField }) => {
  const classes = styles();
  const [rows] = useState(!dynamicField ? row : CreateSkelton(row, column).row);
  const [columns] = useState(!dynamicField ? column : CreateSkelton(row, column).column);

  return (
    <TableContainer component={Paper} className={classes.tableContainerSkelton}>
      <Table
        className={classes.minWidth650}
        aria-label="simple table"
        stickyHeader
      >
        <TableHead>
          <TableRow>
            {columns?.map((item) => (
              <TableCell
                align="left"
                key={nanoid()}
                className={classes.tableCellSkelton}
              >
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((item) => (
            <TableRow key={nanoid()} className={classes.tableRowSkelton}>
              {columns?.map((it) => (
                <TableCell
                  key={nanoid()}
                  align="left"
                  className={classes.tableColumnSkelton}
                >
                  {item[it]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableSkeleton;
