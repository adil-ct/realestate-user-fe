import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  LinearProgress,
  Avatar,
  AvatarGroup,
  Rating,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { getPropertyListSaga } from "store/actions";
import { routePaths } from "routes/mainRoutes/routePaths";
import house1 from "assets/images/house1.png";
import house2 from "assets/images/house2.png";
import house3 from "assets/images/house3.png";

const NAVY = "#1A2B4A";
const NAVY_DARK = "#0F1C32";
const GOLD = "#C9A84C";
const OFF_WHITE = "#F8F7F4";
const TEXT_MUTED = "#6B7280";
const BORDER = "#E2E8F0";

const SectionHeading = ({ children, sx }) => (
  <Typography
    sx={{
      fontSize: { xs: 24, md: 36 },
      fontWeight: 800,
      color: NAVY,
      lineHeight: 1.2,
      ...sx,
    }}
  >
    {children}
  </Typography>
);

const PillBadge = ({ active = false, children }) => (
  <Box
    sx={{
      px: 2.5,
      py: 0.75,
      borderRadius: 999,
      border: `1px solid ${active ? NAVY : BORDER}`,
      backgroundColor: active ? NAVY : "transparent",
      color: active ? "#fff" : NAVY,
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer",
    }}
  >
    {children}
  </Box>
);

const ChainBadge = ({ label, color }) => (
  <Box
    sx={{
      display: "inline-flex",
      alignItems: "center",
      gap: 1,
      px: 2,
      py: 0.75,
      borderRadius: 999,
      backgroundColor: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.18)",
    }}
  >
    <Box
      sx={{
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: color,
      }}
    />
    <Typography sx={{ fontSize: 13, color: "#fff", fontWeight: 600 }}>
      {label}
    </Typography>
  </Box>
);

const PropertyMiniCard = ({ id, tag, image, title, total, investors, sold, percent }) => {
  const navigate = useNavigate();
  const goToDetails = () => {
    if (id) {
      navigate(`${routePaths.PROPERTY_PROFILE_PATH}/?id=${id}`);
    } else {
      navigate(routePaths.INVESTOR_PATH);
    }
  };
  return (
    <Box
      onClick={goToDetails}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        backgroundColor: "#fff",
        border: `1px solid ${BORDER}`,
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": { transform: "translateY(-3px)", boxShadow: "0 8px 20px rgba(0,0,0,0.08)" },
      }}
    >
      <Box sx={{ position: "relative", height: 160 }}>
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        {tag && (
          <Box
            sx={{
              position: "absolute",
              top: 12,
              left: 12,
              px: 1.5,
              py: 0.5,
              backgroundColor: GOLD,
              color: NAVY,
              borderRadius: 1,
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            {tag}
          </Box>
        )}
        <Box
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            width: 30,
            height: 30,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: 14,
          }}
        >
          ♡
        </Box>
      </Box>
      <Box sx={{ p: 2.5, display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography sx={{ fontSize: 15, fontWeight: 700, color: NAVY }}>
          {title}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography sx={{ fontSize: 11, color: TEXT_MUTED }}>
              Total Value
            </Typography>
            <Typography sx={{ fontSize: 15, fontWeight: 700, color: NAVY }}>
              ${total.toLocaleString()}
            </Typography>
          </Box>
          <Box sx={{ textAlign: "right" }}>
            <Typography sx={{ fontSize: 11, color: TEXT_MUTED }}>
              Investors
            </Typography>
            <Typography sx={{ fontSize: 14, fontWeight: 700, color: NAVY }}>
              {investors}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}
          >
            <Typography sx={{ fontSize: 11, color: TEXT_MUTED }}>
              {sold.toLocaleString()} Sold
            </Typography>
            <Typography sx={{ fontSize: 11, color: TEXT_MUTED }}>
              {percent}% Sold
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={percent}
            sx={{
              height: 5,
              borderRadius: 3,
              backgroundColor: "#F1F0EC",
              "& .MuiLinearProgress-bar": { backgroundColor: GOLD },
            }}
          />
        </Box>
        <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              goToDetails();
            }}
            sx={{
              flex: 1,
              backgroundColor: NAVY,
              color: "#fff",
              textTransform: "none",
              fontSize: 12,
              fontWeight: 600,
              borderRadius: 1.5,
              py: 0.75,
              "&:hover": { backgroundColor: NAVY_DARK },
            }}
          >
            Invest Now ↗
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const BigPropertyCard = ({ image, title, location, height = 240, tag, onClick }) => (
  <Box
    onClick={onClick}
    sx={{
      position: "relative",
      borderRadius: 3,
      overflow: "hidden",
      height,
      cursor: "pointer",
      backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.75) 100%), url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      transition: "transform 0.25s ease",
      "&:hover": { transform: "translateY(-3px)" },
    }}
  >
    {tag && (
      <Box
        sx={{
          position: "absolute",
          top: 14,
          right: 14,
          backgroundColor: "rgba(255,255,255,0.9)",
          color: NAVY,
          px: 1.5,
          py: 0.5,
          borderRadius: 1,
          fontSize: 11,
          fontWeight: 700,
        }}
      >
        {tag}
      </Box>
    )}
    <Box sx={{ position: "absolute", bottom: 14, left: 14, right: 14, color: "#fff" }}>
      <Typography sx={{ fontSize: 17, fontWeight: 700 }}>{title}</Typography>
      <Typography sx={{ fontSize: 12, opacity: 0.85 }}>
        📍 {location}
      </Typography>
    </Box>
  </Box>
);

const StepCardSimple = ({ num, color, title, sub, desc, bullets }) => (
  <Box
    sx={{
      backgroundColor: "#fff",
      borderRadius: 3,
      p: 3.5,
      border: `1px solid ${BORDER}`,
      height: "100%",
    }}
  >
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", mb: 2 }}>
      <Box>
        <Typography sx={{ fontSize: 30, fontWeight: 800, color: NAVY, lineHeight: 1 }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 13, fontWeight: 600, color, mt: 0.5 }}>
          {sub}
        </Typography>
      </Box>
      <Typography sx={{ fontSize: 18, fontWeight: 700, color: TEXT_MUTED }}>
        {num}.
      </Typography>
    </Box>
    <Typography sx={{ fontSize: 13.5, color: "#475569", lineHeight: 1.6, mb: 2 }}>
      {desc}
    </Typography>
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      {bullets.map((b) => (
        <Box key={b} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CheckCircleIcon sx={{ fontSize: 16, color }} />
          <Typography sx={{ fontSize: 13, color: NAVY }}>{b}</Typography>
        </Box>
      ))}
    </Box>
  </Box>
);

const TestimonialCard = ({ role, text, name, sub }) => (
  <Box
    sx={{
      backgroundColor: "#fff",
      borderRadius: 3,
      p: 3,
      border: `1px solid ${BORDER}`,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 1.5,
    }}
  >
    <Typography sx={{ fontSize: 15, fontWeight: 700, color: NAVY }}>
      {role}
    </Typography>
    <Typography sx={{ fontSize: 13.5, color: "#475569", lineHeight: 1.6, flex: 1 }}>
      {text}
    </Typography>
    <Box sx={{ pt: 1.5, borderTop: `1px solid ${BORDER}` }}>
      <Typography sx={{ fontSize: 13, fontWeight: 700, color: NAVY }}>
        {name}
      </Typography>
      <Typography sx={{ fontSize: 11, color: TEXT_MUTED }}>{sub}</Typography>
    </Box>
  </Box>
);

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { propertyList } = useSelector((state) => state.marketplace);
  const { userData } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(
      getPropertyListSaga({
        qp: "startIndex=1&itemsPerPage=8",
        handleSuccess: () => {},
      })
    );
  }, [dispatch]);

  const greeting = userData?.firstName ? `, ${userData.firstName}` : "";
  const liveProperties = (propertyList || []).slice(0, 3);

  // Build mini cards from live data with fallbacks
  const miniCards = liveProperties.length
    ? liveProperties.map((p, idx) => {
        const total = Number(p?.lastPropertyValue) || 0;
        const sold = Number(p?.tokensSold) || 0;
        const numTokens = Number(p?.numberOfTokens) || 1;
        const percent = Math.min(100, Math.round((sold / numTokens) * 100));
        return {
          id: p?._id,
          tag: idx === 0 ? "Featured" : idx === 1 ? "Hot" : null,
          image: p?.mainImage?.url || [house1, house2, house3][idx % 3],
          title: p?.title || `Property ${idx + 1}`,
          total,
          investors: 20 + idx * 5,
          sold,
          percent,
        };
      })
    : [
        {
          tag: "Featured",
          image: house1,
          title: "Maple Grove Residence",
          total: 1000000,
          investors: 24,
          sold: 50000,
          percent: 65,
        },
        {
          tag: "Hot",
          image: house2,
          title: "Cedar Park Estates",
          total: 4544378,
          investors: 18,
          sold: 33290,
          percent: 37.5,
        },
        {
          image: house3,
          title: "Riverside Loft",
          total: 3000000,
          investors: 30,
          sold: 50000,
          percent: 55,
        },
      ];

  const browseProperties = (propertyList || []).slice(0, 4).map((p, idx) => ({
    id: p?._id,
    image: p?.mainImage?.url || [house1, house2, house3, house1][idx % 3],
    title: p?.title || ["Maple Grove Residence", "Cedar Park Estates", "Riverside Loft", "Hilltop Manor"][idx],
    location: [p?.city, p?.state].filter(Boolean).join(", ") || "United States",
  }));

  while (browseProperties.length < 4) {
    const idx = browseProperties.length;
    browseProperties.push({
      image: [house1, house2, house3, house1][idx % 3],
      title: ["Maple Grove Residence", "Cedar Park Estates", "Riverside Loft", "Hilltop Manor"][idx],
      location: ["Austin, TX", "Denver, CO", "Tampa, FL", "Charlotte, NC"][idx],
    });
  }

  const goToProperty = (id) => {
    if (id) {
      navigate(`${routePaths.PROPERTY_PROFILE_PATH}/?id=${id}`);
    } else {
      navigate(routePaths.INVESTOR_PATH);
    }
  };

  return (
    <Box sx={{ backgroundColor: OFF_WHITE }}>
      {/* HERO */}
      <Container maxWidth="lg" sx={{ pt: { xs: 3, md: 5 }, pb: { xs: 3, md: 4 } }}>
        <Box
          sx={{
            position: "relative",
            borderRadius: 4,
            overflow: "hidden",
            background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_DARK} 100%)`,
            color: "#fff",
          }}
        >
          <Grid container alignItems="stretch">
            <Grid item xs={12} md={6}>
              <Box sx={{ p: { xs: 4, md: 6 }, position: "relative", zIndex: 1 }}>
                <Typography
                  sx={{
                    fontSize: { xs: 28, md: 44 },
                    fontWeight: 800,
                    lineHeight: 1.15,
                    mb: 2,
                  }}
                >
                  Invest in Real Estate{greeting && `,`}
                  <br />
                  Powered by Blockchain
                </Typography>
                <Typography
                  sx={{
                    fontSize: 15,
                    color: "#CBD5E1",
                    mb: 3,
                    maxWidth: 480,
                    lineHeight: 1.6,
                  }}
                >
                  Fractional ownership: high liquidity, secure transactions —
                  made possible by tokenization. {greeting && `Welcome back${greeting}.`}
                </Typography>
                <Button
                  onClick={() => navigate(routePaths.INVESTOR_PATH)}
                  sx={{
                    backgroundColor: GOLD,
                    color: NAVY,
                    fontWeight: 700,
                    px: 3.5,
                    py: 1.3,
                    borderRadius: 2,
                    textTransform: "none",
                    fontSize: 14,
                    "&:hover": { backgroundColor: "#B6952F" },
                  }}
                  endIcon={<ArrowOutwardIcon />}
                >
                  Start Investing
                </Button>
                <Box sx={{ display: "flex", gap: 4, mt: 5, alignItems: "center", flexWrap: "wrap" }}>
                  <Box>
                    <Typography sx={{ fontSize: 12, color: "#CBD5E1" }}>
                      8–12% net
                    </Typography>
                    <Typography sx={{ fontSize: 12, color: "#CBD5E1", opacity: 0.7 }}>
                      annual ROI
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <AvatarGroup max={4} sx={{ "& .MuiAvatar-root": { width: 28, height: 28, fontSize: 11, border: "2px solid #fff" } }}>
                      <Avatar sx={{ bgcolor: GOLD }}>M</Avatar>
                      <Avatar sx={{ bgcolor: NAVY }}>D</Avatar>
                      <Avatar sx={{ bgcolor: "#E8CC82" }}>A</Avatar>
                      <Avatar sx={{ bgcolor: NAVY }}>J</Avatar>
                    </AvatarGroup>
                    <Box>
                      <Typography sx={{ fontSize: 13, fontWeight: 700 }}>
                        50k+ Happy Clients
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <Rating value={4.5} precision={0.5} readOnly size="small" sx={{ color: GOLD }} />
                        <Typography sx={{ fontSize: 11, color: "#CBD5E1" }}>4.5/5</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: { xs: 280, md: "100%" },
                  minHeight: { md: 420 },
                  backgroundImage: `url(${house1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* TRUST STATS */}
      <Container maxWidth="lg" sx={{ pb: { xs: 4, md: 6 } }}>
        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                height: 220,
                backgroundImage: `url(${house2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Grid>
          <Grid item xs={12} md={3.5}>
            <Box sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", gap: 0.5 }}>
              <Typography sx={{ fontSize: 18, fontWeight: 700, color: NAVY, mb: 1 }}>
                Secure, Transparent, and Tokenized — The Blockchain Real Estate Revolution
              </Typography>
              <Typography sx={{ fontSize: 13, color: TEXT_MUTED, lineHeight: 1.5 }}>
                Experience the next generation of property investment with smart
                contracts, secure transactions, and transparent ownership records
                — all on a decentralized platform.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3.5}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, height: "100%" }}>
              <Box sx={{ backgroundColor: "#fff", borderRadius: 2, p: 2.5, border: `1px solid ${BORDER}` }}>
                <Typography sx={{ fontSize: 24, fontWeight: 800, color: NAVY }}>
                  100%
                </Typography>
                <Typography sx={{ fontSize: 12, color: TEXT_MUTED }}>
                  Blockchain-verified ownership
                </Typography>
              </Box>
              <Box sx={{ backgroundColor: "#fff", borderRadius: 2, p: 2.5, border: `1px solid ${BORDER}` }}>
                <Typography sx={{ fontSize: 24, fontWeight: 800, color: NAVY }}>
                  $250
                </Typography>
                <Typography sx={{ fontSize: 12, color: TEXT_MUTED }}>
                  Minimum investment
                </Typography>
              </Box>
              <Box sx={{ backgroundColor: "#fff", borderRadius: 2, p: 2.5, border: `1px solid ${BORDER}` }}>
                <Typography sx={{ fontSize: 24, fontWeight: 800, color: NAVY }}>
                  Instant
                </Typography>
                <Typography sx={{ fontSize: 12, color: TEXT_MUTED }}>
                  Global transfer of assets
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* BLOCKCHAIN BANNER */}
      <Box sx={{ backgroundColor: NAVY_DARK, py: { xs: 5, md: 7 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  height: 220,
                  backgroundImage: `url(${house3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(0.55)",
                }}
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography sx={{ fontSize: { xs: 22, md: 30 }, fontWeight: 800, color: "#fff", mb: 3, lineHeight: 1.2 }}>
                Blockchain = Trust & Transparency
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 3 }}>
                {[
                  "Immutable transaction records",
                  "Smart contract automation",
                  "Security via decentralized networks",
                  "No middleman, lower fees",
                ].map((item) => (
                  <Box key={item} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <CheckCircleIcon sx={{ fontSize: 18, color: GOLD }} />
                    <Typography sx={{ fontSize: 14, color: "#fff" }}>{item}</Typography>
                  </Box>
                ))}
              </Box>
              <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
                <ChainBadge label="Ethereum" color="#6F7CBA" />
                <ChainBadge label="Solana" color="#14F195" />
                <ChainBadge label="Polygon" color="#8247E5" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* TOP RATED PROPERTIES */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <SectionHeading>Explore our highly rated properties</SectionHeading>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1.5, mb: 4, flexWrap: "wrap" }}>
          <PillBadge active>Featured</PillBadge>
          <PillBadge>Residential</PillBadge>
          <PillBadge>Commercial</PillBadge>
          <PillBadge>Land</PillBadge>
        </Box>
        <Grid container spacing={3}>
          {miniCards.map((card, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <PropertyMiniCard {...card} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* BROWSE TOKENIZED PROPERTIES */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3, flexWrap: "wrap", gap: 2 }}>
          <SectionHeading sx={{ maxWidth: 600 }}>
            Browse tokenized real estate hotspots
          </SectionHeading>
          <Button
            onClick={() => navigate(routePaths.INVESTOR_PATH)}
            sx={{
              border: `1px solid ${NAVY}`,
              color: NAVY,
              textTransform: "none",
              borderRadius: 2,
              px: 2.5,
              py: 1,
              fontWeight: 600,
              fontSize: 13,
              "&:hover": { backgroundColor: NAVY, color: "#fff" },
            }}
            endIcon={<ArrowOutwardIcon sx={{ fontSize: 14 }} />}
          >
            View Listings
          </Button>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <BigPropertyCard
              {...browseProperties[0]}
              height={340}
              onClick={() => goToProperty(browseProperties[0]?.id)}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <BigPropertyCard
              {...browseProperties[1]}
              height={340}
              onClick={() => goToProperty(browseProperties[1]?.id)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <BigPropertyCard
              {...browseProperties[2]}
              height={220}
              onClick={() => goToProperty(browseProperties[2]?.id)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <BigPropertyCard
              {...browseProperties[3]}
              height={220}
              onClick={() => goToProperty(browseProperties[3]?.id)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <BigPropertyCard
              {...browseProperties[0]}
              height={220}
              onClick={() => goToProperty(browseProperties[0]?.id)}
            />
          </Grid>
        </Grid>
      </Container>

      {/* GATEWAY PANEL */}
      <Container maxWidth="lg" sx={{ pb: { xs: 5, md: 7 } }}>
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: 3,
            p: { xs: 3, md: 5 },
            border: `1px solid ${BORDER}`,
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={3} sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography sx={{ fontSize: 56, fontWeight: 800, color: NAVY, lineHeight: 1 }}>
                4.0
              </Typography>
              <Rating value={4} readOnly sx={{ color: GOLD, mt: 1 }} />
              <Typography sx={{ fontSize: 12, color: TEXT_MUTED, mt: 1 }}>
                Trusted by 500+ reviews
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={{ fontSize: 13, color: GOLD, fontWeight: 700, mb: 1 }}>
                ABOUT US
              </Typography>
              <SectionHeading sx={{ fontSize: { xs: 22, md: 28 }, mb: 2 }}>
                Your gateway to smart real estate investments
              </SectionHeading>
              <Typography sx={{ fontSize: 13.5, color: "#475569", lineHeight: 1.7 }}>
                We are a blockchain-powered real estate tokenization platform,
                offering secure, hassle-free investment opportunities to a growing
                community of savvy investors. With thousands of active investors
                and a portfolio of high-demand, tokenized properties, we make
                property ownership accessible to everyone through fractional
                investments. Our commitment is to deliver value, transparency,
                and trust in the modern real estate market.
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3, textAlign: { xs: "center", md: "left" } }}>
                <Box>
                  <Typography sx={{ fontSize: 36, fontWeight: 800, color: NAVY }}>
                    250+
                  </Typography>
                  <Typography sx={{ fontSize: 12, color: TEXT_MUTED }}>
                    Trusted clients
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: 36, fontWeight: 800, color: NAVY }}>
                    190+
                  </Typography>
                  <Typography sx={{ fontSize: 12, color: TEXT_MUTED }}>
                    Fully funded
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* IT'S REALLY THIS SIMPLE */}
      <Container maxWidth="lg" sx={{ pb: { xs: 5, md: 7 } }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <SectionHeading>It&apos;s really this simple</SectionHeading>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <StepCardSimple
              num="01"
              color={GOLD}
              title="Buy"
              sub="Tokenized real estate"
              desc="Browse our property-curated portfolio and invest in tokenized luxury properties starting from just $250 USD."
              bullets={["Fractional ownership", "Low minimum investment", "Instant purchase"]}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <StepCardSimple
              num="02"
              color="#22C55E"
              title="Grow"
              sub="Smart wealth growth"
              desc="Hold tokens that grow as the property appreciates and as principal is paid down by tenant rent."
              bullets={["Retained rental income", "Long-term value growth", "Smart portfolio expansion"]}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <StepCardSimple
              num="03"
              color="#8247E5"
              title="Earn"
              sub="Passive income"
              desc="Receive monthly rental income and capital appreciation directly to your wallet automatically."
              bullets={["Monthly distributions", "Capital appreciation", "Automated payments"]}
            />
          </Grid>
        </Grid>
      </Container>

      {/* WHY CHOOSE US — dark image CTA */}
      <Container maxWidth="lg" sx={{ pb: { xs: 5, md: 7 } }}>
        <Box
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            position: "relative",
            backgroundImage: `linear-gradient(135deg, rgba(15,28,50,0.85), rgba(15,28,50,0.85)), url(${house1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: 280,
            display: "flex",
            alignItems: "center",
            p: { xs: 4, md: 6 },
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography sx={{ fontSize: { xs: 22, md: 30 }, fontWeight: 800, color: "#fff", mb: 2 }}>
                Why choose us as your blockchain real estate partner?
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#CBD5E1", lineHeight: 1.6, maxWidth: 540 }}>
                Our innovative platform combines blockchain technology with
                real-estate expertise to deliver secure, transparent, and
                rewarding investment experiences. We offer tailored solutions
                for fractional property ownership, ensuring your investments
                are backed by cutting-edge security, and a strong track record
                of investor success.
              </Typography>
            </Grid>
            <Grid item xs={12} md={5} sx={{ textAlign: { xs: "left", md: "right" } }}>
              <Button
                onClick={() => navigate(routePaths.INVESTOR_PATH)}
                sx={{
                  backgroundColor: GOLD,
                  color: NAVY,
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: "none",
                  fontSize: 14,
                  "&:hover": { backgroundColor: "#B6952F" },
                }}
                endIcon={<ArrowOutwardIcon />}
              >
                Contact Us
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* TESTIMONIALS */}
      <Container maxWidth="lg" sx={{ pb: { xs: 6, md: 8 } }}>
        <Box sx={{ mb: 4 }}>
          <SectionHeading>People say about us…</SectionHeading>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <TestimonialCard
              role="Luxury apartment investor"
              text="Owning a share of a Dubai marina apartment for just AED 5,000 felt unreal. I get monthly rent payouts, and my property value has grown. Blockchain transparency makes the trust every step."
              name="Ahmed Raza"
              sub="UAE"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TestimonialCard
              role="Commercial property investor"
              text="Bought fractional tokens in a business bay office, earned 12% growth in a year plus steady payouts. No paperwork, no hassle — just secure blockchain-backed investing."
              name="Priya Mehra"
              sub="India"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TestimonialCard
              role="Diversified portfolio holder"
              text="I hold tokens in four properties — residential, commercial, and vacation homes. Great returns, easy tracking, and total peace of mind thanks to blockchain security."
              name="James Al-Fayed"
              sub="UK"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
