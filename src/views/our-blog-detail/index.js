import { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import DOMpurify from "dompurify";
import rehypeRaw from "rehype-raw";
import { Skeleton } from "@mui/material";
import moment from "moment";

// Relative imports
import { blogMain } from "utils/axiosMain";
import ImageContentCard from "components/card/image-content-card";
import blogstake from "assets/images/blogstake.png";
import errorImage from "assets/images/computer.png";
import prifileImg from "assets/images/user.png";
import styles from "./styles";
import linkedin from "assets/images/social/linkedin-black.svg";
import x from "assets/images/social/x-logo-black.svg";

const OurBlogDetails = () => {
  const classes = styles();
  const [blogDetail, setblogDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const params = useParams();
  const id = params.id;

  const fetchBlogDetails = async () => {
    try {
      setLoading(true);
      const response = await blogMain.get(`/admin/get-blog/${id}`);
      const { data } = response?.data || "";
      setblogDetail(data);
      setLoading(false);
    } catch (err) {
      setError(err?.message);
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchBlogDetails();
  }, [id]);

  return (
    <>
      <Box className={classes.mainContainer}>
        {error ? (
          <ImageContentCard subtitle={error} image={errorImage} link={true} />
        ) : (
          <>
            <Box className={classes.blogSection1}>
              <Typography variant="span" className={classes.heroBlogDetails}>
                {loading ? (
                  <Skeleton width={150} height={50} />
                ) : (
                  moment(blogDetail?.createdAt).format("MMM YYYY")
                )}
              </Typography>
              <Typography variant="h1" className={classes.heroBlogTitle}>
                {loading ? (
                  <Skeleton height={100} width={400} />
                ) : blogDetail?.title?.length > 50 ? (
                  blogDetail?.title?.slice(0, 50) + "..."
                ) : (
                  blogDetail?.title
                )}
              </Typography>

              <Box className={classes.heroBlogAuthorDetails}>
                {loading ? (
                  <Skeleton variant="circular" height={50} width={50} />
                ) : (
                  <img
                    src={blogDetail?.author?.profilePic?.url || prifileImg}
                    alt="blog author"
                  />
                )}
                <Typography
                  variant="span"
                  className={classes.heroBlogAuthorDetailsName}
                >
                  {loading ? (
                    <Skeleton width={200} height={50} />
                  ) : blogDetail?.author?.firstName ? (
                    blogDetail?.author?.firstName +
                    " " +
                    blogDetail?.author?.lastName
                  ) : (
                    "Anonymous"
                  )}
                </Typography>
              </Box>
            </Box>
            <Box>
              {loading ? (
                <Skeleton height={500} />
              ) : (
                <img
                  src={blogDetail?.image?.url || blogstake}
                  className={classes.avatar}
                  title={blogDetail?.title}
                  alt="blogInvest"
                />
              )}
              <Box className={`padding_all ${classes.blogDetailSection}`}>
                <Box className={classes.blogDetailSocials}>
                  <a href="#"><img src={x} alt="X logo"></img></a>
                  <a href="#"><img src={linkedin} alt="linkedin logo"></img></a>
                </Box>
                <Typography
                  component={"div"}
                  className={classes.blogDetailSectionDescription}
                >
                  {loading ? (
                    <Skeleton height={400} />
                  ) : (
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw]}
                    >
                      {DOMpurify.sanitize(blogDetail?.content)}
                    </ReactMarkdown>
                  )}
                </Typography>
              </Box>
              <Box className={`padding_all ${classes.bottomSection}`}>
                <Box className={classes.bottomContentContainer}>
                  {loading ? (
                    <Skeleton variant="circular" height={50} width={50} />
                  ) : (
                    <img
                      src={blogDetail?.author?.profilePic?.url || prifileImg}
                      className={classes.profile}
                      alt="blog"
                    />
                  )}
                  <Box className={classes.blogDetail}>
                    <Typography className={classes.header3} variant="span">
                      {loading ? (
                        <Skeleton width={200} height={50} />
                      ) : blogDetail?.author?.firstName ? (
                        blogDetail?.author?.firstName +
                        " " +
                        blogDetail?.author?.lastName
                      ) : (
                        "Anonymous"
                      )}
                    </Typography>
                    {/* <Typography
                      className={classes.blogDetailAuthorDescription}
                      variant="p"
                    >
                      Lorem ipsum dolor sit amet consectetur. Habitant eu eget
                      est vulputate sagittis a in. Interdum massa vitae
                      suspendisse nibh dignissim.
                    </Typography> */}
                    {/* <Box className={classes.blogDetailAuthorLinksContainer}>
                      <a href="#"><img src={x} alt="X" /></a>
                      <a href="#"><img src={linkedin} alt="linkedin" /></a>
                    </Box> */}
                  </Box>
                </Box>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default OurBlogDetails;
