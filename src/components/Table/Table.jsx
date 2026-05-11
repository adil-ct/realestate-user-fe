/* eslint-disable no-nested-ternary */
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InfiniteScroll from "react-infinite-scroller";
import MKBadge from "components/custom/MKBadge";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

export default function BasicTable({ column, row, borderRadius }) {
  const [rowProp, setRowprop] = React.useState(row);
  const rowdata = [
    {
      Date: "1-1-2020 z 10:00 AM | EST",
      Amount: "$1000.00",
      From: "Account Info",
      Status: <MKBadge badgeContent="Completed" /*color="success"*/ container />,
    },
    {
      Date: "1-1-2020 z 10:00 AM | EST",
      Amount: "$1000.00",
      From: "Account Info",
      Status: <MKBadge badgeContent="Completed" /*color="success"*/ container />,
    },
    {
      Date: "1-1-2020 z 10:00 AM | EST",
      Amount: "$1000.00",
      From: "Account Info",
      Status: <MKBadge badgeContent="Completed" /*color="success"*/ container />,
    },
    {
      Date: "1-1-2020 z 10:00 AM | EST",
      Amount: "$1000.00",
      From: "Account Info",
      Status: <MKBadge badgeContent="Completed" /*color="success"*/ container />,
    },
  ];
  const loaddata = () => {
    setRowprop([...rowProp, ...rowdata]);
  };
  return (
    <TableContainer
      component={Paper}
      sx={{
        "@media (max-width: 850px)": {
          display: "none",
        },
        borderRadius: `${borderRadius || "12px"}`,
        // border: "1px solid #E5E5E5",
        display: "inlineBlock",
        maxHeight: "400px",
        overflowY: "scroll",
      }}
    >
      <InfiniteScroll
        pageStart={0}
        hasMore={rowProp?.length < row?.length || false}
        loadMore={() => loaddata()}
        useWindow={false}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              {column.map((item) => (
                <TableCell
                  key={item}
                  align="left"
                  sx={{
                    fontSize: 14,
                    // color: " grey",
                    fontWeight: "400",
                  }}
                >
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {row.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                {column.map((it) => (
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: 14,
                      // color: " black",
                      // fontFamily: "Roboto",
                      fontWeight: "400",
                      maxHeight: "400px",
                    }}
                    key={it}
                  >
                    {it === "Status" ? (
                      <MKBadge
                        badgeContent={item[it]}
                        // color="success"
                        container
                        style={{ color: item[it] === "In Progress" && "error" }}
                      />
                    ) : it === "Title" ? (
                      <Link to="/proposals/live/NC-02" /*style={{ color: "#2B32B2" }}*/>
                        {item[it]}
                      </Link>
                    ) : it === "Txn ID" ? (
                      <Link to="/" /*style={{ color: "#2B32B2" }}*/>
                        {item[it]}
                      </Link>
                    ) : it === "Download" ? (
                      <Typography
                        display="flex"
                        sx={{
                          "@media (max-width: 600px)": { justifyContent: "right", pt: 1 },
                          fontSize: "14px",
                          // color: " #2B32B2",
                        }}
                      >
                        {" "}
                        <FileDownloadIcon sx={{ /*color: " #2B32B2",*/ marginRight: "5px" }} />
                        <Typography
                          sx={{ fontSize: "14px", /*color: " #2B32B2",*/ lineHeight: "12px" }}
                        >
                          {item[it]}
                        </Typography>
                      </Typography>
                    ) : it === "Action" ? (
                      <Link to="/" /*style={{ color: "#2B32B2" }}*/>
                        {item[it]}
                      </Link>
                    ) : it === "Agreement Id" ? (
                      <Link to="/" /*style={{ color: "#2B32B2" }}*/>
                        {item[it]}
                      </Link>
                    ) : (
                      item[it]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </InfiniteScroll>
    </TableContainer>
  );
}
