import React from "react";
import PropTypes from "prop-types";
import Autocomplete, { autocompleteClasses } from "@mui/material/Autocomplete";
import useMediaQuery from "@mui/material/useMediaQuery";
import ListSubheader from "@mui/material/ListSubheader";
import Popper from "@mui/material/Popper";
import { useTheme, styled } from "@mui/material/styles";
import { VariableSizeList } from "react-window";
import Typography from "@mui/material/Typography";

// Static imports
import MKInput from "components/custom/MKInput";
import styles from './styles';

const LISTBOX_PADDING = 8; // px

function renderRow(props) {
  const { data, index, style } = props;
  const dataSet = data[index];
  const inlineStyle = {
    ...style,
    top: style.top + LISTBOX_PADDING,
  };

  if (dataSet.hasOwnProperty("group")) {
    return (
      <ListSubheader key={dataSet.key} component="div" style={inlineStyle}>
        {dataSet.group}
      </ListSubheader>
    );
  }

  return (
    <Typography component="li" {...dataSet[0]} noWrap style={inlineStyle}>
      {dataSet[1]}
    </Typography>
  );
}

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef((props, ref) => {
  const outerProps = React.useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

function useResetCache(data) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
}

// Adapter for react-window
const ListboxComponent = React.forwardRef(function ListboxComponent(
  props,
  ref
) {
  const { children, ...other } = props;
  const itemData = [];
  children.forEach((item) => {
    itemData.push(item);
    itemData.push(...(item.children || []));
  });

  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("sm"), {
    noSsr: true,
  });

  const itemCount = itemData.length;
  const itemSize = smUp ? 36 : 48;

  const getChildSize = (child) => {
    if (child.hasOwnProperty("group")) {
      return 48;
    }

    return itemSize;
  };

  const getHeight = () => {
    if (itemCount > 8) {
      return 8 * itemSize;
    }
    return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
  };

  const gridRef = useResetCache(itemCount);
  //   console.log("var", itemData);

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
          itemData={itemData}
          height={getHeight() + 2 * LISTBOX_PADDING}
          width="100%"
          ref={gridRef}
          outerElementType={OuterElementType}
          innerElementType="ul"
          itemSize={(index) => getChildSize(itemData[index])}
          overscanCount={5}
          itemCount={itemCount}
        >
          {renderRow}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>
  );
});

ListboxComponent.propTypes = {
  children: PropTypes.node,
};

const StyledPopper = styled(Popper)({
  [`& .${autocompleteClasses.listbox}`]: {
    boxSizing: "border-box",
    "& ul": {
      padding: 0,
      margin: 0,
    },
  },
});

const Virtualize = ({
  isLoading,
  id,
  name,
  formik,
  data,
  onChangeHandler,
  valueField,
  ...rest
}) => {
  const classes = styles();
  return (
    <Autocomplete
      id="virtualize-demo"
      disableListWrap
      key={isLoading}
      // inputValue={formik.values[name]}
      disabled={isLoading}
      InputLabelProps={{ shrink: false }}
      onInputChange={(e, newValue) => onChangeHandler(newValue)}
      onChange={(e) => onChangeHandler(e.target.textContent)}
      PopperComponent={StyledPopper}
      ListboxComponent={ListboxComponent}
      options={data}
      renderGroup={(params) => params}
      getOptionLabel={(option) =>
        valueField?.length > 0 ? option[valueField] : option || ""
      }
      renderInput={(params) => (
        <MKInput
          placeholder="Select"
          id={id}
          name={name}
          error={formik.touched[name] && Boolean(formik.errors[name])}
          helperText={formik.touched[name] ? '' : formik.errors[name]}
          classes={{ root: classes.customTextField }}
          {...params}
        />
      )}
      renderOption={(props, option) => {
        return [props, valueField?.length > 0 ? option[valueField] : option];
      }}
      {...rest}
    />
  );
};

export default Virtualize;
