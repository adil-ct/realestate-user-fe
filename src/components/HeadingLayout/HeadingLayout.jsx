import React from "react";
import MKTypography from "components/custom/MKTypography";
import styles from './styles';

function HeadingLayout(props) {
  const classes = styles();
  const {
    heading,
    heading1,
    subHeading,
    subHeading1,
    subHeadingBold,
    type,
    ...rest
  } = props;
  const { sectionDesktop, sectionMobile } = classes;
  let classNameByType = sectionDesktop;
  switch (type) {
    case "mobile":
      classNameByType = sectionMobile;
      break;
    case "all":
      classNameByType = "";
      break;
    default:
  }
  return (
    <>
      <MKTypography
        variant="h2"
        sx={{ pt: "30px" }}
        className={`${classNameByType} ${classes.title}`}
        {...rest}
      >
        {heading}
      </MKTypography>
      <MKTypography
        variant="h6"
        p={2}
        className={`${classNameByType} ${classes.mt20}`}
        {...rest}
      >
        {subHeading1}
      </MKTypography>
      <MKTypography
        variant="h5"
        fontWeight="regular"
        className={`${classNameByType} ${classes.subtitle}`}
        {...rest}
      >
        {subHeading}
        <b>{subHeadingBold}</b>
        {rest?.subheadingboldafter}
      </MKTypography>
      {type === sectionMobile && (
        <>
          <MKTypography
            variant="h2"
            style={{ paddingLeft: 30 }}
            className={classNameByType}
            {...rest}
          >
            {heading1}
          </MKTypography>
        </>
      )}
    </>
  );
}

export default HeadingLayout;
