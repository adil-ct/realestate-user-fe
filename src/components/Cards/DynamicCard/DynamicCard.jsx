import React from "react";
import { nanoid } from "nanoid";
import InfiniteScroll from "react-infinite-scroller";

// Static imports
import MKBox from "components/custom/MKBox";
import CardGrids from "./CardGrids";
import styles from "./styles";

function DynamicCard({
  row,
  column,
  cardConfig,
  link = "",
  idIndex = "",
  tableAdvancedActions,
  noDataType,
  pagination,
  noDataHandler,
}) {
  const classes = styles();
  const [rowProp, setRowprop] = React.useState(row);
  const loaddata = () => {
    setRowprop([...rowProp, ...row]);
  };
  return (
    <MKBox className={classes.mainContainer}>
      <InfiniteScroll
        pageStart={0}
        useWindow={false}
        hasMore={rowProp?.length < row?.length || false}
        loadMore={() => loaddata()}
        loader={
          <div className="loader" key={nanoid()}>
            Loading...
          </div>
        }
      >
        <CardGrids
          row={row}
          noDataHandler={noDataHandler}
          cardConfig={cardConfig}
          link={link}
          idIndex={idIndex}
          column={column}
          tableAdvancedActions={tableAdvancedActions}
          noDataType={noDataType}
          pagination={pagination}
        />
      </InfiniteScroll>
    </MKBox>
  );
}

export default DynamicCard;
