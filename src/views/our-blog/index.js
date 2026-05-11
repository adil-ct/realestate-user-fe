import { useEffect, useState } from "react";
import moment from "moment";
import {
  Grid,
  Typography,
  Pagination,
  Box,
} from "@mui/material";

// Relative imports
import { blogMain } from "utils/axiosMain";
import OurBlogCard from "components/card/our-blog-card";
import { useStyles } from "./styles";
import ButtonGroup from "components/button-group";
import SearchInput from "../../components/search-input/SearchInput";

const OurBlog = () => {
  const offset = 6;
  const [text, setText] = useState("");
  const [blogData, setBlogData] = useState([]);
  const [metaData, setMetaData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [searchFlag, setSearchFlag] = useState("");
  const [activeBtn, setActiveBtn] = useState(
    localStorage.getItem("blogtype") || "popular"
  );
  const classes = useStyles({ loading });

  // Fetch all blogs
  const fetchBlogs = async (type, page) => {
    try {
      setLoading(true);
      const response = await blogMain.get(
        type === "popular"
          ? `/admin/blogs?page=${page}&limit=${offset}&isPopular=true&search=${text}`
          : `/admin/blogs?&page=${page}&limit=${offset}&type=${
              type === "all" ? "" : type
            }&search=${text}`
      );
      // const featuredData = await blogMain.get(`/admin/blogs?isOnTop=true`);
      const { blogs, totalCount } = response?.data?.data || "";
      // const { blogs: featuredBlogs } = featuredData?.data?.data || "";
      setBlogData(blogs);
      setPageNumber(page);
      setMetaData({
        pageCount: Math.ceil(totalCount / offset),
      });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err?.message);
      console.log(err);
    }
  };

  // Fetch blog types
  // eslint-disable-next-line no-unused-vars
  const fetchTypes = async () => {
    const response = await blogMain.get("/admin/blog-types");
    console.log("res", response);
  };

  useEffect(() => {
    fetchBlogs(activeBtn, text?.length > 0 ? pageNumber : 1);
  }, [activeBtn, searchFlag]);

//   const handleClick = (id, title) => {
//     navigate(
//       `${routePaths.BLOG_DETAILS_PATH}/${id}/${title.split(" ").join("-")}`
//     );
//   };
  const handlePageChange = (event, page) => {
    fetchBlogs(activeBtn, page);
  };

  let timeout = "";
  const handleTextChange = (e) => {
    setText(e.target.value);
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      setSearchFlag(e.target.value);
    }, 700);
  };

  return (
    <>
      <Box className={classes.blogHero}>
        <Typography variant="h1" className={classes.blogHeroTitle}>
          Empowering Through <strong>Knowledge</strong>
        </Typography>
        <Typography variant="p" className={classes.blogHeroDescription}>
          Breaking Down the Last Barrier to Investing.
        </Typography>
        {!error && <SearchInput value={text} handleChange={handleTextChange} />}
      </Box>
      <Box className={`${classes.blogsRoot}`} pb={5}>
        <Box className={classes.headerSection}>
          <Box className={classes.btnSection}>
            <ButtonGroup
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
              setPageNumber={setPageNumber}
              setText={setText}
            />
          </Box>
        </Box>
        <Box className="padding_all">
          {/* General Blogs */}
          <Box className={classes.blogSection2}>
            <Grid container spacing={3}>
              {!error &&
                (loading
                  ? [...new Array(6)]
                  : blogData?.length > 0
                  ? blogData
                  : []
                ).map((item) => {
                  if (!item) {
                    return null;
                  }
                  return (
                    <Grid
                      key={item?.title}
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                    >
                      {loading ? (
                        <OurBlogCard loading />
                      ) : (
                        <OurBlogCard
                          category={item?.blogTypeDetails}
                          avatar={item?.image?.url}
                          avatar1={item?.authorProfilePic?.url}
                          title={item?.title}
                          description={item?.content}
                          name={
                            item?.authorFirstName + " " + item?.authorLastName
                          }
                          date={moment(item?.createdAt).format("MMM YYYY")}
                          // color={colorArr[0]}
                          popular={item?.isPopular}
                          id={item?._id}
                        />
                      )}
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
        </Box>
      </Box>
      {!error && metaData.pageCount > 1 && (
        <Box className={classes.paginationBlock}>
          <Pagination
            count={metaData.pageCount}
            size="large"
            onChange={handlePageChange}
            page={pageNumber}
            color="primary"
          />
        </Box>
      )}
    </>
  );
};

export default OurBlog;
