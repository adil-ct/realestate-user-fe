import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DialogContent, Grid } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';

// Static imports
import ButtonSpinner from "components/Loader/ButtonSpinner";
import { OvalSpinner } from "components/Loader/GenericLoaders";
import MKBox from "components/custom/MKBox";
import MKTypography from "components/custom/MKTypography";
import styles from "../Modal/styles";
import MKButton from "components/custom/MKButton";
import { NoDownload } from "constants/assets";
import { getListOfCards } from "store/actions";

const DepositModal = ({
  handelMainDepositModalContinue,
  paymentMethods,
  setPaymentMethods,
  setPaymentmethod,
  loading,
  paymentMethod,
  disabledState,
  addMethod,
  onSelectSavedCard,
}) => {
  const classes = styles();
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);
  const [selectedSavedCardId, setSelectedSavedCardId] = useState(null);
  const { isLoading: pLoading } = useSelector((state) => state.user);
  const { linkedCards, isLoading: accountsLoading } = useSelector(
    (state) => state.accounts
  );
  const savedCards = linkedCards?.data || [];

  useEffect(() => {
    dispatch(getListOfCards({ page: 1, limit: 100 }));
  }, [dispatch]);
  // const { isLoading: authLoader } = useSelector((state) => state.auth);

  // Toggle the status of payment methods
  const toggleCheckedStatus = async (id) => {
    setSelectedSavedCardId(null);
    const modifiedList = await paymentMethods?.map((item) => {
      if (item?.id === id) {
        setPaymentmethod(item?.key);
        if (!item?.status) {
          setDisabled(false);
        } else setDisabled(true);
        return {
          ...item,
          status: !item?.status,
        };
      }
      return {
        ...item,
        status: false,
      };
    });
    setPaymentMethods(modifiedList);
    const selectedItem =  modifiedList.find((item) => item.id === 1)
    if (id === 1 && selectedItem.status) {
      return addMethod();
    }
  };

  const handleSavedCardSelect = (card) => {
    setSelectedSavedCardId(card?.id);
    setPaymentmethod("");
    const clearedList = paymentMethods?.map((item) => ({ ...item, status: false }));
    setPaymentMethods(clearedList);
    if (typeof onSelectSavedCard === "function") {
      onSelectSavedCard(card);
    }
  };

  const brandAccent = (brand) => {
    switch ((brand || "").toLowerCase()) {
      case "visa":
        return { bg: "#1A1F71", fg: "#FFFFFF" };
      case "mastercard":
        return { bg: "#EB001B", fg: "#FFFFFF" };
      case "amex":
      case "american express":
        return { bg: "#006FCF", fg: "#FFFFFF" };
      case "discover":
        return { bg: "#FF6000", fg: "#FFFFFF" };
      case "diners":
      case "diners club":
        return { bg: "#0079BE", fg: "#FFFFFF" };
      case "jcb":
        return { bg: "#0E4C96", fg: "#FFFFFF" };
      case "unionpay":
        return { bg: "#E21836", fg: "#FFFFFF" };
      default:
        return { bg: "#2C3E50", fg: "#FFFFFF" };
    }
  };

  const cardStyles = {
    section: {
      marginBottom: 24,
    },
    sectionLabel: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "#6B7280",
      marginBottom: 12,
      marginTop: 8,
    },
    row: (selected) => ({
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "14px 16px",
      borderRadius: 12,
      border: `1.5px solid ${selected ? "#B69C5A" : "#E5E7EB"}`,
      background: selected ? "rgba(182, 156, 90, 0.06)" : "#FFFFFF",
      cursor: "pointer",
      transition: "all 160ms ease",
      marginBottom: 10,
      boxShadow: selected
        ? "0 1px 2px rgba(0,0,0,0.04), 0 0 0 3px rgba(182, 156, 90, 0.12)"
        : "0 1px 2px rgba(0,0,0,0.03)",
    }),
    brandChip: (accent) => ({
      width: 44,
      height: 30,
      borderRadius: 6,
      background: accent.bg,
      color: accent.fg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.04em",
      flexShrink: 0,
    }),
    cardBody: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0,
    },
    cardPrimary: {
      fontSize: 14,
      fontWeight: 600,
      color: "#111827",
      lineHeight: 1.4,
      display: "flex",
      alignItems: "center",
      gap: 8,
    },
    cardSecondary: {
      fontSize: 12,
      color: "#6B7280",
      marginTop: 2,
    },
    defaultPill: {
      fontSize: 10,
      fontWeight: 600,
      color: "#92740A",
      background: "rgba(182, 156, 90, 0.15)",
      padding: "2px 8px",
      borderRadius: 999,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
    },
    radioOuter: (selected) => ({
      width: 20,
      height: 20,
      borderRadius: "50%",
      border: `2px solid ${selected ? "#B69C5A" : "#D1D5DB"}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      transition: "border-color 160ms ease",
    }),
    radioInner: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "#B69C5A",
    },
    loaderRow: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      marginBottom: 24,
    },
    skeleton: {
      height: 64,
      borderRadius: 12,
      background:
        "linear-gradient(90deg, #F3F4F6 0%, #E5E7EB 50%, #F3F4F6 100%)",
      backgroundSize: "200% 100%",
      animation: "savedCardShimmer 1.4s ease-in-out infinite",
    },
  };

  const continueToPaymentMethods = () => {
    switch (paymentMethod) {
      case "usdc":
        handelMainDepositModalContinue()
        break;
      case "card":
        handelMainDepositModalContinue()
        break;
      case "ach":
        handelMainDepositModalContinue()
        break;
      case "stripe-ach":
        handelMainDepositModalContinue()
        break;
      case "stripe-card":
        handelMainDepositModalContinue()
        break;

      default: return false;
    }
  }

  return (
    <>
        <DialogContent
          display="flex"
          justify="center"
          p={2}
          className={classes.dialogContent}
        ><>
            <MKBox display="flex" className={classes.depositSelectBox}>
              <MKBox className={classes.selectBoxMainContainer}>
                <style>{`@keyframes savedCardShimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`}</style>
                {accountsLoading?.getCardsList ? (
                  <MKBox style={cardStyles.section}>
                    <MKTypography style={cardStyles.sectionLabel} component="div">
                      Saved Cards
                    </MKTypography>
                    <MKBox style={cardStyles.loaderRow}>
                      <MKBox style={cardStyles.skeleton} />
                      <MKBox style={cardStyles.skeleton} />
                    </MKBox>
                  </MKBox>
                ) : (
                  savedCards.length > 0 && (
                    <MKBox style={cardStyles.section}>
                      <MKTypography
                        style={cardStyles.sectionLabel}
                        component="div"
                      >
                        Saved Cards
                      </MKTypography>
                      {savedCards.map((card) => {
                        const isSelected = selectedSavedCardId === card?.id;
                        const accent = brandAccent(card?.card?.brand);
                        const brandLabel = (card?.card?.brand || "Card").toUpperCase();
                        const last4 = card?.card?.last4 || "----";
                        const expiry =
                          card?.card?.exp_month && card?.card?.exp_year
                            ? `Expires ${String(card.card.exp_month).padStart(2, "0")}/${String(card.card.exp_year).slice(-2)}`
                            : "";
                        return (
                          <MKBox
                            key={card?.id}
                            style={cardStyles.row(isSelected)}
                            onClick={() => handleSavedCardSelect(card)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                handleSavedCardSelect(card);
                              }
                            }}
                          >
                            <MKBox style={cardStyles.brandChip(accent)}>
                              {brandLabel.length <= 6 ? (
                                brandLabel
                              ) : (
                                <CreditCardIcon style={{ fontSize: 18 }} />
                              )}
                            </MKBox>
                            <MKBox style={cardStyles.cardBody}>
                              <MKBox style={cardStyles.cardPrimary} component="div">
                                <span>•••• {last4}</span>
                                {card?.metadata?.isDefault === "true" && (
                                  <span style={cardStyles.defaultPill}>Default</span>
                                )}
                              </MKBox>
                              {expiry && (
                                <MKTypography
                                  style={cardStyles.cardSecondary}
                                  component="div"
                                >
                                  {expiry}
                                </MKTypography>
                              )}
                            </MKBox>
                            <MKBox style={cardStyles.radioOuter(isSelected)}>
                              {isSelected && <MKBox style={cardStyles.radioInner} />}
                            </MKBox>
                          </MKBox>
                        );
                      })}
                    </MKBox>
                  )
                )}
               { paymentMethods?.length > 0 &&  <MKTypography
                  variant="h3"
                  align="left"
                  className={classes.dTitle3}
                >
                  Funding Method
                </MKTypography> }
                {paymentMethods?.length === 0 && (
                  <MKBox className={classes.noContentBox}>
                    {
                      pLoading?.paymentMethods ? <MKBox className={classes.noContentBox} height="30vh">
                        <OvalSpinner isLoading={true} />
                      </MKBox> : <>
                        <span className={classes.noContentText}>
                          We are working on something awesome. stay tuned!
                        </span>

                        <MKBox className={classes.iconContainer1}>
                          <img
                            src={NoDownload}
                            alt="No Data"
                            className={classes.noPaymentM}
                          />
                        </MKBox></>
                    }

                  </MKBox>
                )
                }
                {paymentMethods?.map((item) => (
                  <MKBox
                    key={item.id}
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    className={
                      item.status
                        ? classes.selectBoxContainerSelectedNew
                        : item.disabled
                          ? classes.disabledBoxContainer
                          : classes.selectBoxContainer1New
                    }
                    onClick={() =>
                      item.disabled ? "" : toggleCheckedStatus(item.id)
                    }
                  >
                    <Grid container>
                      <Grid item xs={11} sm={11} md={11} lg={11}>
                        <MKBox className={classes.mainIconContainer}>
                          <MKBox display="flex" alignItems="center" >
                            <MKBox display="flex" alignItems="center">
                              <MKBox className={classes.iconContainer}>
                                <img
                                  src={item.Image}
                                  className={classes.depositImg2}
                                  alt={item.alt}
                                />
                              </MKBox>
                            </MKBox>
                            <MKBox className={classes.selectMethod}>
                              <MKTypography
                                variant="gradient"
                                fontWeight="bold"
                                fontSize="14px"
                                className={classes.methodTagline1}
                              >
                                {item.name}
                              </MKTypography>
                              <MKBox className={classes.selectMethod2}>
                                <MKTypography className={classes.walletAvaLmt}>
                                  {item.noLimit && !item?.disabled ? item.noLimit : ""}
                                </MKTypography>
                                {!item?.disabled ? (
                                  <MKTypography className={classes.walletAvaLmt}>
                                    {item.limit ? "Available limit " : ""}
                                  </MKTypography>
                                ) : (
                                  <MKTypography className={classes.walletAvaLmt}>
                                    {item?.disableMsg}
                                  </MKTypography>
                                )}
                                {!item?.disabled && (
                                  <MKTypography className={classes.walletAvaLmt2}>
                                    {item.limit}
                                  </MKTypography>
                                )}
                              </MKBox>
                            </MKBox>
                          </MKBox>
                        </MKBox>
                      </Grid>
                      <Grid item xs={1} sm={1} md={1} lg={1} display="flex">
                        {item.status && (
                          <MKBox display="flex" alignItems="center" pl="5px">
                            <CheckCircleIcon className={classes.checkedIcon}/>
                          </MKBox>
                        )}
                      </Grid>
                    </Grid>
                  </MKBox>
                ))}
              </MKBox>

            </MKBox>
            {paymentMethods?.length !== 0 && (
              <MKBox display="flex" justifyContent="center">
                <MKButton
                  variant="gradient"
                  className={classes.depoitContinueBtnNew}
                  // color="primary"
                  size="medium"
                  onClick={continueToPaymentMethods}
                  disabled={disabled || disabledState || loading}
                >
                  <ButtonSpinner isLoading={loading} text="Continue" />
                </MKButton>
              </MKBox>
            )}
          </>
        </DialogContent>
    </>
  );
};

export default DepositModal;
