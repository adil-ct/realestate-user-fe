import React from "react";
import { Grid, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import Pagination from "@mui/material/Pagination";

import ApplyCompTo from "components/DynamicTable/components/ApplyComp";
import EmptyTable from "components/Table/EmptyTable";
import NoAccount from "components/Table/NoAccount";
import styles from "./styles";

const lightvariant = {
  key: {
    fontWeight: "400",
    // color: "#51566B",
    mt: "7px",
  },
  value: {
    // color: "#51566B",
    textAlign: "right",
    mt: "7px",
  },
};

const darkvariant = {
  key: { fontWeight: "400", /*color: "#51566B"*/ },
  red: { fontWeight: "400", /*color: "red",*/ textAlign: "right" },
  value: { textAlign: "right" },
};

const cardDesignPattern1 = (index) => {
  switch (index) {
    case 0:
      return {
        key: {},
        value: darkvariant.value,
      };
    case 1:
      return {
        key: darkvariant.key,
        value: darkvariant.value,
      };
    default:
      return {
        key: lightvariant.key,
        value: lightvariant.value,
      };
  }
};

const CardGrids = ({
  row,
  column,
  cardConfig,
  link,
  idIndex,
  tableAdvancedActions,
  noDataType,
  pagination,
  noDataHandler,
}) => {
  const classes = styles();
  
  return row?.length > 0 ? (
    <React.Fragment>
      {row?.map((data) => (
        <React.Fragment key={nanoid()}>
          <Grid container columns={16} className={classes.cardContainer}>
            {column.map((key, index) => (
              <React.Fragment key={nanoid()}>
                <Grid item xs={8}>
                  <Typography
                    variant="h6"
                    fontSize="14px"
                    className={classes.keyHeading}
                    component="div"
                  >
                    {key}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={8}
                  className={
                    key === "Allocation"
                      ? classes.wordBreak
                      : classes.wordBreak1
                  }
                >
                  
                  <Typography
                    variant="h6"
                    fontSize="14px"
                    width="100%"
                    sx={cardDesignPattern1(index).value}
                    component="div"
                  >
                    {cardConfig[index] ? (
                      <ApplyCompTo
                        type={cardConfig[index]}
                        content={data[key]}
                        altContent={data}
                        // Creating dynamic link where link = baseURl && data[Object.keys(data)[idIndex]] = id corresponds to the single entry
                        link={
                          link
                            ? `${link}${data[Object.keys(data)[idIndex]]}`
                            : ""
                        }
                        tableAdvancedActions={tableAdvancedActions}
                      />
                    ) : (
                      data[key]
                    )}
                  </Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </React.Fragment>
      ))}
      {pagination && pagination?.maxCount > 1 && (
        <Pagination
          className={classes.paginate}
          classes={{ ul: classes.ul }}
          count={pagination?.maxCount}
          onChange={(event, value) => {
            event.preventDefault();
            pagination?.handler(value);
          }}
          shape="rounded"
          page={pagination?.currentPage}
        />
      )}
    </React.Fragment>
  ) : (
    <>
      {noDataType ? (
        <NoAccount noDataHandler={noDataHandler} type={noDataType} />
      ) : (
        <EmptyTable />
      )}
    </>
  );
};

export default CardGrids;
