import React from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Box, Typography, Skeleton } from "@mui/material";

// Relative imports
import User from "assets/images/user.png";
import { useOurBlogCardStyles } from "./styles";

const OurBlogCard = ({
  avatar,
  avatar1,
  title,
  name,
  date,
  color,
  id,
  loading,
  category
}) => {
  const navigate = useNavigate();
  const classes = useOurBlogCardStyles({ color, loading });

  // Redirect to details page
  const handleClick = () => {
    navigate(`/blog-details/${id}/${title.split(" ").join("-")}`);
  };

  return (
    <Box className={classes.root} onClick={handleClick}>
      <Box className={classes.topSection}>
        {loading ? (
          <Box className={`${classes.imageSection} ${classes.cardpic}`}>
            <Skeleton className={classes.skelLoad1} height={150} />
          </Box>
        ) : (
          <Box className={`${classes.imageSection} ${classes.cardpic}`}>
            <LazyLoadImage
              src={avatar}
              className={classes.avatar}
              alt="blog"
              title={title}
            />
          </Box>
        )}
        <Box>
          <Box className={classes.bloghead}>
            <Typography className={classes.headerBlogDetails} variant="span">
                {category[0].name} | {loading ? <Skeleton width={200} /> : date}
            </Typography>
            <Typography className={classes.headerBlog} variant="h5">
              {loading ? (
                <Skeleton />
              ) : title.length > 55 ? (
                title.slice(0, 55) + "..."
              ) : (
                title
              )}
            </Typography>
          </Box>

          <Box className={classes.bottomSection}>
            {loading ? (
              <Skeleton variant="circular" height={"100%"} width="100%" />
            ) : (
              <img
                src={avatar1 || User}
                className={classes.profile}
                alt="blog"
              />
            )}
            <Box className={classes.blogDetail}>
              <Typography className={classes.header3} variant="body1">
                {loading ? <Skeleton width={200} /> : name}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurBlogCard;
