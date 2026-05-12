import {
  ContainerBar,
  TextNews,
  SirenImg,
  TextNewsMobile,
  LinkBanner,
} from "./styles";
import logo from "assets/icons/header-news/tech-crunch.svg";
import siren from "assets/icons/header-news/siren.svg";
import { routePaths } from "routes/mainRoutes/routePaths";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const HeaderNews = () => {
  const hasAuthToken = Boolean(localStorage.getItem("authToken"));
  const [showHeader, setShowHeader] = useState(true);
  const { pathname } = useLocation();
  const pagesShowHeader = [
    routePaths.LANDING_PAGE_PATH,
    routePaths.WHY_REAL_ESTATE_PATH,
    routePaths.HOW_IT_WORKS_PATH,
    routePaths.ABOUT_US_PATH,
    routePaths.MOGUL_CLUB_PATH,
    routePaths.OUR_BLOGS_PATH,
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      if (pagesShowHeader.includes(pathname)) {
        if (scrollPos < 600 && !showHeader) {
          setShowHeader(true);
        } else if (scrollPos >= 600 && showHeader) {
          setShowHeader(false);
        }
      } else {
        setShowHeader(false);
      }
    };

    if (pagesShowHeader.includes(pathname)) {
      window.addEventListener("scroll", handleScroll);
    } else {
      setShowHeader(false);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showHeader, pathname]);

  useEffect(() => {
    if (pagesShowHeader.includes(pathname)) {
      setShowHeader(true);
    }
  }, [pathname]);

  return (
    <ContainerBar $display={showHeader}>
      <img src={logo} alt="logo" />
      <SirenImg src={siren} alt="logo" />
      <TextNews>
        <b style={{ fontWeight: 800 }}>Breaking News:</b> Occurrence announces
        4X oversubscribed, 3.6mm Seed Round!
      </TextNews>
      <TextNewsMobile>
        Occurrence announces $3.6 million Seed Round
      </TextNewsMobile>
      <LinkBanner
        to={
          hasAuthToken
            ? routePaths.INVESTOR_PATH
            : routePaths.LOGIN_REGISTER_PATH
        }
      >
        Invest Now
      </LinkBanner>
    </ContainerBar>
  );
};

export default HeaderNews;
