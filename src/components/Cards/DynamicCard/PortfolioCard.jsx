import React from "react";
import { nanoid } from "nanoid";
import InfiniteScroll from "react-infinite-scroller";

// Static imports
import MKBox from "components/custom/MKBox";
import CardGrids from "./CardPortfolioGrid";
import styles from "./styles";

function DynamicCard({
  row,
  column,
  cardConfig,
  link = "",
  idIndex = "",
  tableAdvancedActions,
  noDataType,
  mainHeader,
  pagination,
}) {
  const classes = styles();
  const [rowProp, setRowprop] = React.useState(row);
  const loaddata = () => {
    setRowprop([...rowProp, ...row]);
  };
  return (
    <MKBox className={classes.mainContainer1}>
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
          cardConfig={cardConfig}
          link={link}
          idIndex={idIndex}
          column={column}
          tableAdvancedActions={tableAdvancedActions}
          noDataType={noDataType}
          pagination={pagination}
          mainHeader={mainHeader}
        />
      </InfiniteScroll>
    </MKBox>
  );
}

export default DynamicCard;
