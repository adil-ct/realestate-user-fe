import { createStyles, makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import styled from "styled-components";

/* ═══ Footer shell ═══ */
export const FooterSection = styled.footer`
  width: 100%;
  background: #0D1B30;
  border-top: 1px solid rgba(255,255,255,0.06);
`;

/* ═══ Max-width wrapper ═══ */
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 56px 56px 0;

  @media (max-width: 1250px) { padding: 48px 36px 0; }
  @media (max-width: 640px)  { padding: 40px 20px 0; }
`;

/* ═══ Top row: brand + columns ═══ */
export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 64px;
  align-items: start;
  padding-bottom: 48px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding-bottom: 36px;
  }
`;

/* ═══ Brand column ═══ */
export const FooterLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FooterLogoBadge = styled.div`
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #C9A84C 0%, #A8872F 100%);
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 900;
  color: #1A2B4A;
  font-family: "PP Fragment-Serif", serif;
`;

export const FooterLogoTitle = styled.span`
  font-size: 17px;
  font-weight: 700;
  color: #FFFFFF;
  font-family: "PP Fragment-Serif", serif;
  letter-spacing: -0.02em;
  display: block;
`;

export const FooterTagline = styled.p`
  font-size: 13px;
  line-height: 1.7;
  color: rgba(148,163,184,0.8);
  font-family: "PP Fragment-Sans", sans-serif;
  margin: 0;
  max-width: 240px;
`;

/* ═══ Legacy compat exports ═══ */
export const FooterHeading    = styled.h1`font-size:14px;font-weight:400;color:rgba(255,255,255,0.8);margin:0;`;
export const FooterHeadingBold = styled.b`display:block;color:#C9A84C;`;

/* ═══ Link columns ═══ */
export const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 420px) { grid-template-columns: 1fr 1fr; gap: 24px; }
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const GridItemTitle = styled.b`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #C9A84C;
  font-family: "PP Fragment-Sans", sans-serif;
  display: block;
  margin-bottom: 2px;
`;

export const GridLinksContainer = styled.div`
  display: flex;
  flex-direction: ${(p) => (p.row ? "row" : "column")};
  gap: ${(p) => (p.row ? "14px" : "9px")};
`;

export const GridLink = styled(Link)`
  font-size: 13px;
  line-height: 1.5;
  color: rgba(148,163,184,0.7);
  font-family: "PP Fragment-Sans", sans-serif;
  transition: color 140ms ease;
  text-decoration: none !important;
  &:hover { color: rgba(255,255,255,0.9); }
`;

export const NormalLink = styled.a`
  font-size: 13px;
  line-height: 1.5;
  color: rgba(148,163,184,0.7);
  font-family: "PP Fragment-Sans", sans-serif;
  transition: color 140ms ease;
  text-decoration: none !important;
  &:hover { color: rgba(255,255,255,0.9); }
`;

/* ═══ Divider ═══ */
export const FooterDivider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255,255,255,0.07);
`;

/* ═══ Bottom bar ═══ */
export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0 20px;
  gap: 12px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const BottomLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const BottomLink = styled.a`
  font-size: 12px;
  color: rgba(148,163,184,0.55);
  font-family: "PP Fragment-Sans", sans-serif;
  transition: color 140ms ease;
  text-decoration: none !important;
  &:hover { color: rgba(255,255,255,0.8); }
`;

export const TextContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  width: 100%;
  padding-bottom: 24px;
`;

export const Text = styled.p`
  font-size: 11px;
  line-height: 1.65;
  color: rgba(148,163,184,0.5);
  margin: 0;
  font-family: "PP Fragment-Sans", sans-serif;
`;

export const BottomImage = styled.img`
  max-width: 100%;
  width: 100%;
`;

const styles = makeStyles(() =>
  createStyles(
    {
      mainGrid: {
        background: "#0D1B30",
        paddingTop: "48px",
        boxSizing: "border-box",
      },
      links: {
        color: "rgba(148,163,184,0.7)",
        textDecoration: "none",
        transition: "color 140ms ease",
        "&:hover": { color: "rgba(255,255,255,0.9)" },
      },
    },
    { name: "footer-component" }
  )
);

export default styles;
