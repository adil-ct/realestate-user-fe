import React from "react";
import { nanoid } from "nanoid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InfiniteScroll from "react-infinite-scroller";
import Pagination from "@mui/material/Pagination";

// Static imports
import NoAccount from "components/Table/NoAccount";
import EmptyTable from "components/Table/EmptyTable";
import ApplyCompTo from "./components/ApplyComp";
import styles from "./styles";

const DynamicTable = ({
  column,
  row,
  tableConfig,
  headColStyle,
  height,
  link = "",
  idIndex = "",
  paginationConfig,
  tableAdvancedActions,
  minHeight,
  noDataType,
  noDataHandler,
}) => {
  const classes = styles();
  const [rowProp, setRowprop] = React.useState(row);

  const loadData = () => {
    setRowprop([...rowProp, ...row]);
  };
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxHeight: { height },
        minHeight: row?.length === 0 ? "190px" : "auto",
        borderRadius: "16px",
      }}
      className={`${classes.tableContainer}`}
    >
      <InfiniteScroll
        pageStart={0}
        hasMore={rowProp?.length < row?.length || false}
        loadMore={() => loadData()}
        useWindow={false}
        style={{ minHeight: minHeight ? minHeight : "" }}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              {column?.map((item, index) => (
                <TableCell
                  key={nanoid()}
                  align="left"
                  className={classes.tableCellStyle}
                  style={headColStyle?.[index] ?? {}}
                >
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody className={classes.tBody}>
            {row?.length !== 0 ? (
              row?.map((item) => (
                <TableRow key={nanoid()} className={classes.tableRow}>
                  {column?.map((it, index) => (
                    <TableCell
                      align={"left"}
                      className={classes.tableCell}
                      key={nanoid()}
                    >
                      {tableConfig && tableConfig[index] ? (
                        <ApplyCompTo
                          type={tableConfig[index]}
                          content={item[it]}
                          altContent={item}
                          tableAdvancedActions={tableAdvancedActions}
                          // Creating dynamic link where link = baseURl && item[column[idIndex]] = id corresponds to the single entry
                          link={link ? `${link}${item[column[idIndex]]}` : ""}
                        />
                      ) : (
                        item[it]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan="100%" className={classes.borderNone}>
                  {noDataType ? (
                    <NoAccount
                      type={noDataType}
                      noDataHandler={noDataHandler}
                    />
                  ) : (
                    <EmptyTable />
                  )}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </InfiniteScroll>
      {paginationConfig && paginationConfig?.maxCount > 1 && (
        <Pagination
          style={{
            marginBottom: "30px",
            marginTop: "10px",
            display: "flex",
            marginRight: "20px",
            justifyContent: "flex-end",
          }}
          classes={{ ul: classes.ul }}
          count={paginationConfig?.maxCount}
          onChange={(event, value) => paginationConfig?.handler(value)}
          shape="rounded"
          page={paginationConfig?.currentPage}
        />
      )}
    </TableContainer>
  );
};

export default DynamicTable;
