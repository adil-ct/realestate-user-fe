import Select from "react-select";
import { FixedSizeList } from "react-window";
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// VirtualizedMenuList component for rendering virtualized list
const VirtualizedMenuList = ({ options, children, maxHeight }) => {
    return (
      <FixedSizeList
        height={Math.min(maxHeight, options.length * 35)} // Adjust 35 according to your option height
        itemCount={options.length}
        itemSize={35} // Adjust based on your option height
        width={"100%"} // Adjust the width of the dropdown
      >
        {({ index, style }) => <div style={style}>{children[index]}</div>}
      </FixedSizeList>
    );
  };


const VirtualizedSelect = ({ formik, list, fieldName, handleOptionChange, isDisabled }) => {

    const colourStyles = {
        control: (styles,{ isDisabled }) => ({
          ...styles,
          backgroundColor: isDisabled ? colors.inputs.background.disabled 
                                      : colors.inputs.background.primary,
          color: isDisabled ? colors.bodyText.disabled : colors.bodyText.primary,
          borderColor: isDisabled ? colors.inputs.border.disabled
                                  : colors.inputs.border.primary,
          opacity: 1,
          fontSize: typography.size.sm,
          lineHeight: typography.lineHeight.lg,
          padding: "auto",
          // border:
          // formik.errors[`${fieldName}`] && formik.touched[`${fieldName}`] ? "1px solid red" : ""
        }),
        option: (styles, { /*data,*/ isDisabled, /*isFocused, isSelected*/ }) => {
            // const color = ;
            return {
              ...styles,
              fontSize: typography.size.sm,
              lineHeight: typography.lineHeight.lg,
              backgroundColor: isDisabled ? colors.inputs.background.disabled 
                                      : colors.inputs.background.primary,
              color: isDisabled ? colors.bodyText.disabled : colors.bodyText.primary,
              borderColor: isDisabled ? colors.inputs.border.disabled
                                      : colors.inputs.border.primary,
              // backgroundColor: isDisabled
              //   ? undefined
              //   : isSelected
              //   ? "#58F2F0"
              //   : isFocused
              //   ? "lightgrey"
              //   : undefined,
              // color: isDisabled
              //   ? '#ccc'
              //   : isSelected ? "black"
              //   : data.color,
              cursor: isDisabled ? 'not-allowed' : 'default',
        
              ':active': {
                ...styles[':active'],
                // backgroundColor: !isDisabled
                //   ? isSelected
                //     ? data.color
                //     : "#58F2F0"
                //   : undefined,
              },
            };
          },
        singleValue: (styles, /*{ isDisabled }*/) => ({
          ...styles,
          opacity: 1,
          backgroundColor: isDisabled ? colors.inputs.background.disabled 
                                      : colors.inputs.background.primary,
          color: isDisabled ? colors.bodyText.disabled : colors.bodyText.primary,
          borderColor: isDisabled ? colors.inputs.border.disabled
                                  : colors.inputs.border.primary,
        }),
      };

    return (
        <Select
        {...formik.getFieldProps(`${fieldName}`)}
        options={list}
        components={{
          MenuList: (props) => (
            <VirtualizedMenuList {...props} options={list} />
          )
        }}
        isSearchable
        autoComplete={"on"}
        autoCorrect={"on"}
        isDisabled={isDisabled}
        aria-autocomplete="both"
        isClearable
        className={
          formik.errors[`${fieldName}`] && formik.touched[`${fieldName}`] ? "error" : ""
        }
        styles={colourStyles}
        onChange={handleOptionChange} // Handle selected option changes
        placeholder={`Select ${ fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}`}
      />
    )
}

export default VirtualizedSelect;