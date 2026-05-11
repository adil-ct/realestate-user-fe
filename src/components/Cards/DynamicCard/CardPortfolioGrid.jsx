import React from "react";
import { Grid, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import Pagination from "@mui/material/Pagination";

import ApplyCompTo from "components/DynamicTable/components/ApplyComp";
import EmptyTable from "components/Table/EmptyTable";
import NoAccount from "components/Table/NoAccount";
import styles from "./styles";

const CardGrids = ({
  row,
  column,
  cardConfig,
  link,
  idIndex,
  tableAdvancedActions,
  noDataType,
  pagination,
  mainHeader,
}) => {
  const classes = styles();
  
  return row?.length > 0 ? (
    <React.Fragment>
      {row?.map((data) => (
        <React.Fragment key={nanoid()}>
          <Grid container columns={16} className={classes.cardContainer}>
            <React.Fragment key={nanoid()}>
              <Grid item xs={12}>
                <Typography fontSize="14px" className={classes.keyHeadingMain} component="div">
                  {data[`${mainHeader}`]}
                </Typography>
              </Grid>
            </React.Fragment>
            {column
              .filter((item) => item !== mainHeader)
              .map((key, index) => (
                <React.Fragment key={nanoid()}>
                  <Grid item xs={8}>
                    <Typography fontSize="14px" className={classes.keyHeading1}>
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
                    <Typography fontSize="14px" className={classes.keyHeading2} component="div">
                      {cardConfig && cardConfig[index] ? (
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
                      ) : key === "# of Tokens" ? (
                        `${data["# of Tokens"]}` || "-"
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
    <>{noDataType ? <NoAccount type={noDataType} /> : <EmptyTable />}</>
  );
};

export default CardGrids;
